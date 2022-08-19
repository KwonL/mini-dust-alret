import React, { useEffect } from 'react'
import Card from '../../components/Card'
import * as S from './style'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { favoriteArr } from '../../feature/dustSlice'

function Favorites() {
  const datas = useSelector(favoriteArr)

  return (
    <>
      {datas && datas.map((item, index) => <Card key={index} guGun={item} />)}
      {datas.length === 0 && <S.Alret>리스트를 추가해주세요😊</S.Alret>}
    </>
  )
}

export default Favorites
