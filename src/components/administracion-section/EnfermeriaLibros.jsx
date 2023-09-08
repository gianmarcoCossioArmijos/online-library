import React, { useEffect, useState } from 'react'
import { useEnfermeria } from '../../hooks/useEnfermeria'

import Table from './Table';

const EnfermeriaLibros = () => {
  const [enfermeria, setEnfermeria] = useState([]);

  const { getEnfermeria } = useEnfermeria();

  useEffect(() => {

    getEnfermeria()
      .then(setEnfermeria)
  }, [])

  return (
    <>

      <Table list={enfermeria}/>

    </>
  )
}

export default EnfermeriaLibros