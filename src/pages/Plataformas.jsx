import React, { useState, useEffect } from 'react'
import { usePlataformas } from '../hooks/usePlataformas.js'

import Aside from '../components/main-section/Aside.jsx'
import Main from '../components/main-section/Main'

const Plataformas = () => {
  const [plataformas, setPlataformas] = useState([]);

  const { getPlataformas } = usePlataformas();

  useEffect(() => {

    getPlataformas()
      .then(setPlataformas)
  }, [])

  return (
    <>

      <Aside />

      <div className='section-base max-h-[800px] overflow-scroll'>
        <Main seccion={plataformas}/>
      </div>

    </>
  )
}

export default Plataformas