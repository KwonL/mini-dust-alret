import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import {
  getDustDataStatus,
  getDustDataError,
  fetchDatas,
} from '../../feature/dustSlice'

function dustContainer() {
  const dispatch = useDispatch()
  const isStatus = useSelector(getDustDataStatus)
  const isError = useSelector(getDustDataError)

  useEffect(() => {
    if (isStatus === 'idle') {
      dispatch(fetchDatas('서울'))
    }
  }, [isStatus, dispatch])

  return <div>미세먼지알림이</div>
}

export default dustContainer
