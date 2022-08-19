import React, { useEffect, useState } from 'react'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { getSidoDatas, favoriteArr } from '../../feature/dustSlice'
import { addMyFavoriteList } from '../../feature/dustSlice'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { strGrade } from '../../utils/constants'

function Card({ guGun }) {
  const dispatch = useDispatch()
  const datas = useSelector(getSidoDatas)
  const likeList = useSelector(favoriteArr)
  const data = datas[guGun]

  const starData = likeList.includes(guGun) ? (
    <FaStar size="1.5rem" />
  ) : (
    <FaRegStar size="1.5rem" />
  )

  const grade = strGrade(data.pm10Grade)
  const addToMyFavorite = () => {
    dispatch(addMyFavoriteList(data.stationName))
  }

  return (
    <>
      {data && (
        <S.Card color={grade[1]}>
          <S.CardHeader>
            <S.CardTitle>
              {data.stationName}
              <S.SubTitle>{data.sidoName}</S.SubTitle>
            </S.CardTitle>

            <S.Star onClick={addToMyFavorite}>{starData}</S.Star>
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
