import React, { useState, useEffect } from 'react'
import { useEnfermeria } from '../hooks/useEnfermeria.js'

import Aside from '../components/main-section/Aside.jsx'
import Main from '../components/main-section/Main'

const Enfermeria = () => {
  const [enfermeria, setEnfermeria] = useState([]);

  const { getEnfermeria } = useEnfermeria();

  useEffect(() => {

    getEnfermeria()
      .then(setEnfermeria)
  }, [])

  return (
    <>

      <Aside />

      <div className='section-base max-h-[800px] overflow-scroll'>
        <Main seccion={enfermeria}/>
      </div>

    </>
  )
}

export default Enfermeria