import React, { useEffect, useState } from 'react'
import { usePlataformas } from '../../hooks/usePlataformas'

import Table from './Table';

const PlataformaLibros = () => {
  const [plataforma, setPlataforma] = useState([]);

  const { getPlataformas } = usePlataformas();

  useEffect(() => {

    getPlataformas()
      .then(setPlataforma)
  }, [])

  return (
    <>

      <Table list={plataforma}/>

    </>
  )
}

export default PlataformaLibros