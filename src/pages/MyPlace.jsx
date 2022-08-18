import React from 'react'
import Card from '../components/Card'

import { useSelector } from 'react-redux/es/exports'
import { selectCardData } from '../feature/dustSlice'

function MyPlace() {
  const data = useSelector(selectCardData)

  return <div> {data && <Card guGun={data} />}</div>
}

export default MyPlace
