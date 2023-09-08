import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import DefaultThumbnail from '../DefaultThumbnail'
import { FaRegEye } from "react-icons/fa";

import { useDispatch  } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../store/bookSlice';

const Main = ({ seccion }) => {
  const [ buscar, setBuscar ] = useState("");
  const [ seccionList, setSeccionList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    setSeccionList(seccion);
  },[seccion])

  const handleClick = (libro) => {
    
    dispatch(addBook(libro));
    navigate("/details");
  }

  const handleChange = (event) => {

    const value = event.target.value;
    setBuscar(value);
  }

  const handleSearch = (event) => {

    if (event.key === 'Enter') {

      const newSeccion = seccion.filter((libro) => libro.titulo.toLowerCase().includes(buscar) === true);
      setSeccionList(newSeccion);
    }

    if (event.key === 'Backspace') {

      const newSeccion = seccion.filter((libro) => libro.titulo.toLowerCase().includes(buscar) === true);
      setSeccionList(newSeccion);
    }
  }

  return (
    <>

        <div className='w-full h-fit py-3 px-1 flex'>

          <input
              type="text"
              name="buscar"
              value={buscar}
              placeholder='Buscar por titulo...'
              onChange={handleChange}
              onKeyDown={handleSearch}
              className='w-full p-2 rounded-lg border shadow-lg'/>

        </div>
    
        {seccionList.map(libro => {
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
    </>
  )
}

export default Main