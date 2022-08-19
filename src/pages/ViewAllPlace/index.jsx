import React from 'react'
import Card from '../../components/Card'
import * as S from './style'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { getGuGunList } from '../../feature/dustSlice'

function ViewAllPlace() {
  const datas = useSelector(getGuGunList)
  return (
    <S.Container>
      {datas && datas.map((item, index) => <Card key={index} guGun={item} />)}
    </S.Container>
  )
}

export default ViewAllPlace
