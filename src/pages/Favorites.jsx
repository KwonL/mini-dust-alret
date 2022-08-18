import React from 'react'
import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { favoriteArr } from '../feature/dustSlice'

function Favorites() {
  const datas = useSelector(favoriteArr)

  return (
    <div>
      {datas.lenght > 1 ? (
        datas.map((item, index) => <Card key={index} guGun={item} />)
      ) : (
        <p>리스트를 추가해주세요</p>
      )}
    </div>
  )
}

export default Favorites
