import React from 'react'

function Card({ datas }) {
  return (
    <div>
      {datas &&
        datas.map((item) => (
          <div key={item.stationName}>
            <div>
              <h3>{item.stationName}</h3>
              <span>{item.sidoName}</span>
              <span>☆</span>
            </div>
            <div>
              <p>{item.pm10Grade}</p>
              <p>{item.khaiValue}</p>
              <p>기준: {item.dataTime}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
