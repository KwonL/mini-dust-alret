import React, { useState, useEffect } from 'react'
import * as S from './style'
import { OPTIONS } from '../../utils/constants'
import {
  getGuGunList,
  getDustDataStatus,
  getDustDataError,
  fetchDatas,
  filterGuGunDatas,
} from '../../feature/dustSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useLocation } from 'react-router'

function SelectBox() {
  const [sido, setSido] = useState(OPTIONS[0])
  const dispatch = useDispatch()
  const isStatus = useSelector(getDustDataStatus)
  const isError = useSelector(getDustDataError)
  const guGunList = useSelector(getGuGunList)

  const location = useLocation().pathname

  const changeSidoHandler = async (e) => {
    setSido(e.target.value)
    dispatch(fetchDatas(e.target.value))
  }

  const changeGuGunHandler = (e) => {
    dispatch(filterGuGunDatas(e.target.value))
  }
  return (
    <S.Container>
      {location !== '/favorite' && (
        <S.SelectBox onChange={changeSidoHandler}>
          {OPTIONS.map((sido, index) => (
            <option key={index} value={sido}>
              {sido}
            </option>
          ))}
        </S.SelectBox>
      )}

      {location == '/' && (
        <S.SelectBox onChange={changeGuGunHandler} width="217">
          {guGunList &&
            guGunList.map((gugun, index) => (
              <option key={index} value={gugun}>
                {gugun}
              </option>
            ))}
        </S.SelectBox>
      )}
    </S.Container>
  )
}

export default SelectBox
