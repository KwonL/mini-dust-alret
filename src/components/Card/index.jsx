import React, { useEffect, useState } from 'react'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { getSidoDatas } from '../../feature/dustSlice'
// import { addToMyFavoriteList } from '../../feature/dustSlice'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { strGrade } from '../../utils/constants'
import { addFavoriteFn, removeFavoriteFn } from '../../utils/addLocalStoroge'

function Card({ guGun }) {
  console.log(guGun, ' guGun')
  const [favorite, setFavorite] = useState(null)
  const datas = useSelector(getSidoDatas)
  console.log('뭐지?', datas)
  const data = datas[guGun]
  console.log(data)
  const guGunName = data.stationName
  const isLiked = localStorage.getItem('myFavorite')?.includes(guGunName)

  const grade = strGrade(data.pm10Grade)

  const addToMyFavorite = (e) => {
    setFavorite(!favorite)
    favorite ? removeFavoriteFn(e) : addFavoriteFn(e)
  }

  useEffect(() => {
    setFavorite(isLiked)
    console.log('실행?')
  }, [])

  return (
    <>
      {data && (
        <S.Card color={grade[1]}>
          <S.CardHeader>
            <S.CardTitle>
              {data.stationName}
              <S.SubTitle>{data.sidoName}</S.SubTitle>
            </S.CardTitle>

            <S.Star onClick={() => addToMyFavorite(data.stationName)}>
              {favorite ? (
                <FaStar size="1.5rem" />
              ) : (
                <FaRegStar size="1.5rem" />
              )}
            </S.Star>
          </S.CardHeader>
          <S.CardBody>
            <S.StrGradArea color={grade[1]}>{grade[0]}</S.StrGradArea>
            <S.Text>미세먼지수치 : {data.khaiValue}</S.Text>
            <S.Text>({data.dataTime} 기준)</S.Text>
          </S.CardBody>
        </S.Card>
      )}
    </>
  )
}

export default Card
