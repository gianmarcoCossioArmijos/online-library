import React, { useEffect, useState } from 'react'
import { useProduccion } from '../hooks/useProduccion'

import Aside from '../components/main-section/Aside.jsx'
import Main from '../components/main-section/Main'

const Produccion = () => {
  const [produccion, setProduccion] = useState([]);

  const { getProduccion } = useProduccion();

  useEffect(() => {

    getProduccion()
      .then(setProduccion)
  }, [])

  return (
    <>
    
        <Aside />

        <div className='section-base max-h-[800px] overflow-scroll'>
          <Main seccion={produccion}/>
        </div>

    </>
  )
}

export default Produccion