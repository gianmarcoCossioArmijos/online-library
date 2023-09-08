import React, { useEffect, useState } from 'react'
import { useAsistencia } from '../../hooks/useAsistencia'

import Table from './Table';

const AsistenciaLibros = () => {
  const [asistencia, setAsistencia] = useState([]);

  const { getAsistencia } = useAsistencia();

  useEffect(() => {

    getAsistencia()
      .then(setAsistencia)
  }, [])

  return (
    <>

      <Table list={asistencia}/>

    </>
  )
}

export default AsistenciaLibros