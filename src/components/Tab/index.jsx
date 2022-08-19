import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GrMapLocation, GrMap, GrStar } from 'react-icons/gr'
import * as S from './style'

function Tab() {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.TabItem onClick={() => navigate('/')}>
        {<GrMap />}
        <S.Text>내지역</S.Text>
      </S.TabItem>
      <S.TabItem onClick={() => navigate('/viewall')}>
        {<GrMapLocation />}
        <S.Text>모든지역</S.Text>
      </S.TabItem>
      <S.TabItem onClick={() => navigate('/favorite')}>
        {<GrStar />}
        <S.Text>즐겨찾기</S.Text>
      </S.TabItem>
    </S.Container>
  )
}

export default Tab
