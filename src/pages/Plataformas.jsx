import React, { useState, useEffect } from 'react'

import { usePlataformas } from '../hooks/usePlataformas.js'
import Aside from '../components/main-section/Aside.jsx'

import DefaultThumbnail from '../components/DefaultThumbnail'
import { FaRegEye } from "react-icons/fa";

const Plataformas = () => {
  const [ plataformas, setPlataformas ] = useState([]);
  const [ buscar, setBuscar ] = useState("");
  const [ list, setList ] = useState([]);

  const { getPlataformas } = usePlataformas();

  useEffect(() => {

    getPlataformas()
      .then(lista => {

        setPlataformas(lista);
        setList(lista);
      });
  }, [])

  const handleClick = (libro) => {
    
    dispatch(addBook(libro));
    navigate("/details");
  }

  const handleChange = (event) => {

    if (event.target.value === "") {

      setList(plataformas);
    }
    
    const value = event.target.value;
    setBuscar(value);
  }

  const handleSearch = (event) => {

    if (event.key === 'Enter') {

      const newSeccion = plataformas.filter((libro) => libro.titulo.toLowerCase().includes(buscar) === true);
      setList(newSeccion);
    }
  }

  return (
    <>

      <Aside />

      <div className='section-base max-h-[800px] overflow-scroll'>
        
        <div className='w-full h-fit py-3 px-1 flex'>

          <input
              type="search"
              name="buscar"
              value={buscar}
              placeholder='Buscar por titulo...'
              onChange={handleChange}
              onKeyDown={handleSearch}
              className='w-full p-2 rounded-lg border shadow-lg'/>

        </div>

        {list.map(libro => {
        return (
            <div className='libro-base' key={libro.id}>
              
              <div className='w-[200px] h-[200px] rounded-t-lg overflow-hidden'>
                {libro.imagen ? <img src={libro.imagen} className='libro-image'/> : <DefaultThumbnail />}
              </div>

              <hr />

              <div className='h-[40px] px-2 flex justify-center font-bold capitalize text-xs text-center'>
                <h5 className='self-center'>{libro?.titulo}</h5>
              </div>

              <hr />

              <button
                  to="/details"
                  className='w-full h-[25px] flex gap-2 justify-center text-xs first-color hover:third-color-hover text-white'
                  onClick={() => handleClick(libro)}>

                <FaRegEye className='h-full'/>
                <span className='self-center'>Ver mas</span>

              </button>

            </div>
        )
        })
        }

      </div>

    </>
  )
}

export default Plataformas