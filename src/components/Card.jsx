import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSidoDatas } from '../feature/dustSlice'

function Card({ guGun }) {
  const dispatch = useDispatch()
  const datas = useSelector(getSidoDatas)
  console.log('datas', datas)
  const data = datas[guGun]
  datas && console.log('성공', data)

  const addToMyFavorite = () => {}

  return (
    <div>
      {data && (
        <div>
          <div>
            <h3>{data.stationName}</h3>
            <span>{data.sidoName}</span>
            <span onClick={addToMyFavorite}>☆</span>
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
