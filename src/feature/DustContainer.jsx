import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { getDustDataStatus, getDustDataError, fetchDatas } from './dustSlice'

function dustContainer() {
  const dispatch = useDispatch()
  const isStatus = useSelector(getDustDataStatus)
  const isError = useSelector(getDustDataError)

  useEffect(() => {
    if (isStatus === 'idle') {
      dispatch(fetchDatas(sido))
    }
  }, [isStatus, dispatch])

  return <div>dustContainer</div>
}

export default dustContainer
