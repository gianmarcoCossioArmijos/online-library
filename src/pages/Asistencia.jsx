import React, { useEffect, useState } from 'react'
import { useAsistencia } from '../hooks/useAsistencia'

import Aside from '../components/main-section/Aside.jsx'
import Main from '../components/main-section/Main'

const Asistencia = () => {
  const [asistencia, setAsistencia] = useState([]);

  const { getAsistencia } = useAsistencia();

  useEffect(() => {

    getAsistencia()
      .then(setAsistencia)
  }, [])

  return (
    <>

      <Aside />

      <div className='section-base max-h-[800px] overflow-scroll'>
        <Main seccion={asistencia}/>
      </div>
        
    </>
  )
}

export default Asistencia