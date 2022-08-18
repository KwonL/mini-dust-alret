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
  status: 'idle',
  error: null,
  myFavorite: [],
}

export const fetchDatas = createAsyncThunk(
  'dust/fetchDatas',
  async (sidoName) => {
    try {
      const { data } = await axios.get(BASE_URL, {
        params: { ...getParameters, sidoName },
      })
      const response = data['response']['body']['items'].map((item) => {
        return (item = {
          ...item,
          myFavorite: false,
        })
      })
      const result = response.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.stationName]: cur,
        }
      }, {})
      console.log('실행', result)
      return result
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
      // state.setCardData = state.setSidoDatas[action.payload]
      state.setCardData = action.payload
    },
    addToMyFavoriteList(state, action) {
      state.setSidoDatas[action.payload].myFavorite =
        !state.setSidoDatas[action.payload].myFavorite
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDatas.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDatas.fulfilled, (state, action) => {
        const result = action.payload
        state.status = 'succeeded'
        state.setSidoDatas = result
        state.setGuGunList = Object.keys(result)
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
export const getDustDataStatus = (state) => state.dust.status
export const getDustDataError = (state) => state.dust.error

export const { filterGuGunDatas, addToMyFavoriteList } = dustSlice.actions

export default dustSlice.reducer
