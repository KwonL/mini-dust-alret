import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const { VITE_SERVICE_KEY } = import.meta.env
const BASE_URL = 'api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'

const getParameters = {
  serviceKey: VITE_SERVICE_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  ver: '1.0',
}

const initialState = {
  setSidoDatas: null,
  setGuGunList: null,
  setCardData: null,
  myFavorite: JSON.parse(localStorage.getItem('myFavorite')) || [],
  status: 'idle',
  error: null,
}

export const fetchDatas = createAsyncThunk(
  'dust/fetchDatas',
  async (sidoName) => {
    try {
      const { data } = await axios.get(BASE_URL, {
        params: { ...getParameters, sidoName },
      })
      return data['response']['body']['items']
    } catch (error) {
      return error.message
    }
  },
)
export const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    filterGuGunDatas(state, action) {
      state.setCardData = action.payload
    },
    addMyFavoriteList(state, action) {
      state.setSidoDatas[action.payload].myFavorite =
        !state.setSidoDatas[action.payload].myFavorite
      state.myFavorite.includes(action.payload)
        ? (state.myFavorite = state.myFavorite.filter(
            (item) => item !== action.payload,
          ))
        : state.myFavorite.push(action.payload)

      localStorage.setItem('myFavorite', JSON.stringify(state.myFavorite))
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDatas.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDatas.fulfilled, (state, action) => {
        let prepare = action.payload
        prepare = prepare.map((item) => {
          const myFavorite = state.myFavorite.includes(item)
          return (item = {
            ...item,
            myFavorite,
          })
        })
        const result = prepare.reduce((acc, cur) => {
          return {
            ...acc,
            [cur.stationName]: cur,
          }
        }, {})
        state.status = 'succeeded'
        state.setSidoDatas = result
        state.setGuGunList = Object.keys(result)
        state.setCardData = Object.keys(result)[0]
      })
      .addCase(fetchDatas.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const getSidoDatas = (state) => state.dust.setSidoDatas
export const getGuGunList = (state) => state.dust.setGuGunList
export const selectCardData = (state) => state.dust.setCardData
export const favoriteArr = (state) => state.dust.myFavorite
export const getDustDataStatus = (state) => state.dust.status
export const getDustDataError = (state) => state.dust.error

export const { filterGuGunDatas, filterGuGunList, addMyFavoriteList } =
  dustSlice.actions
export default dustSlice.reducer
