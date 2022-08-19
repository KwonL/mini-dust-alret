import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { GrMapLocation, GrMap, GrStar } from 'react-icons/gr'
import * as S from './style'

function Tab({ isActive }) {
  const path = useLocation().pathname
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.TabItem onClick={() => navigate('/')} active={isActive === '/'}>
        {<GrMap />}
        <S.Text>내지역</S.Text>
      </S.TabItem>
      <S.TabItem
        onClick={() => navigate('/viewall')}
        active={isActive === '/viewall'}
      >
        {<GrMapLocation />}
        <S.Text>모든지역</S.Text>
      </S.TabItem>
      <S.TabItem
        onClick={() => navigate('/favorite')}
        active={isActive === '/favorite'}
      >
        {<GrStar />}
        <S.Text>즐겨찾기</S.Text>
      </S.TabItem>
    </S.Container>
  )
}

export default Tab
