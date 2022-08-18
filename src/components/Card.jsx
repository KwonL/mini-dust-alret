import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSidoDatas } from '../feature/dustSlice'
import { addToMyFavoriteList } from '../feature/dustSlice'

function Card({ guGun }) {
  const dispatch = useDispatch()
  const datas = useSelector(getSidoDatas)
  const data = datas[guGun]

  const addToMyFavorite = () => {
    console.log('클릭')
    dispatch(addToMyFavoriteList(data.stationName))
  }

  return (
    <div>
      {data && (
        <div>
          <div>
            <h3>{data.stationName}</h3>
            <span>{data.sidoName}</span>
            <span onClick={addToMyFavorite}>
              {data.myFavorite ? '☆' : '안돼'}
            </span>
          </div>
          <div>
            <p>{data.pm10Grade}</p>
            <p>{data.khaiValue}</p>
            <p>기준: {data.dataTime}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
