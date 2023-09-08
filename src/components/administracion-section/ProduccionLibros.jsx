import React, { useEffect, useState } from 'react'

import { useProduccion } from '../../hooks/useProduccion'
import Table from './Table';

const ProduccionLibros = () => {
  const [produccion, setProduccion] = useState([]);

  const { getProduccion } = useProduccion();

  useEffect(() => {

    getProduccion()
      .then(setProduccion)
  }, [])

  return (
    <>

      <Table list={produccion} />

    </>
  )
}

export default ProduccionLibros