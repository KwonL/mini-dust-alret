import React, { useEffect } from 'react'
import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { favoriteArr } from '../feature/dustSlice'

function Favorites() {
  const datas = useSelector(favoriteArr)

  return (
    <>
      {datas && datas.map((item, index) => <Card key={index} guGun={item} />)}
    </>
  )
}

export default Favorites
