import React from 'react'
import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { getGuGunList } from '../feature/dustSlice'

function ViewAllPlace() {
  const datas = useSelector(getGuGunList)
  return (
    <div>
      {datas && datas.map((item, index) => <Card key={index} guGun={item} />)}
    </div>
  )
}

export default ViewAllPlace
