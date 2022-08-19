import React, { useEffect } from 'react'
import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { favoriteArr } from '../feature/dustSlice'

function Favorites() {
  const datas = useSelector(favoriteArr)

  useEffect(() => {
    console.log('갱신되나?', datas)
    console.log(datas.lenght)
  }, [datas])

  return (
    <>
      {datas.lenght !== 0 &&
        datas.map((item, index) => <Card key={index} guGun={item} />)}
    </>
  )
}

export default Favorites
