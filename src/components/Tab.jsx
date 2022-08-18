import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'

function Tab() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/')}>내지역</button>
      <button onClick={() => navigate('/viewall')}>모든지역</button>
      <button onClick={() => navigate('/favorite')}>
        {<BsFillStarFill />}
      </button>
    </div>
  )
}

export default Tab
