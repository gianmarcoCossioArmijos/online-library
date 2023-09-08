import React, { useEffect, useState } from 'react';

import DefaultThumbnail from '../DefaultThumbnail.jsx';
import { SlBookOpen } from "react-icons/sl";

import { Link } from 'react-router-dom';
import { useSelector  } from "react-redux"
import Aside from './Aside.jsx';

const Detalles = () => {
  const [detalles, setDetalles] = useState({
    titulo: "",
    autor: "",
    editorial: "",
    publicacion: "",
    isbn: "",
    descripcion: "",
    imagen: "",
    url:"",
    seccion: ""
  });

  const book = useSelector((state) => state.book);

  useEffect( () => {

    setBook();
  }, [])

  const setBook = () => {

    setDetalles({
      titulo: book.titulo,
      autor: book.autor,
      editorial: book.editorial,
      publicacion: book.publicacion,
      isbn: book.isbn,
      descripcion: book.descripcion,
      imagen: book.imagen,
      url:book.url,
      seccion: book.seccion
    });
  }

  return (
    <>

      <Aside />

      <div className='section-base'>
          <div className='w-[400px] m-auto rounded-lg shadow-lg'>

            <div className='w-[400px] h-[400px] rounded-t-lg overflow-hidden'>
                {detalles.imagen ? <img src={detalles?.imagen} className='w-[400px] h-[400px] mx-auto rounded-t-lg'/> : <DefaultThumbnail />}
            </div>

            <h4 className='py-2 text-center uppercase text-lg font-bold'>
              {detalles?.titulo}
            </h4>

            <hr />

            <div className='flex flex-col'>

              <div className='w-full px-2 flex gap-4 text-sm'>
                <span><strong>Autor: </strong></span>
                <span>{detalles?.titulo}</span>
              </div>

              <div className='w-full px-2 flex gap-4 text-sm'>
                <span><strong>Editorial: </strong></span>
                <span>{detalles?.editorial}</span>
              </div>

              <div className='w-full px-2 flex gap-4 text-sm'>
                <span><strong>Publicacion: </strong></span>
                <span>{detalles?.publicacion}</span>
              </div>

              <div className='w-full px-2 flex gap-4 text-sm'>
                <span><strong>ISBN: </strong></span>
                <span>{detalles?.isbn}</span>
              </div>

            </div>

            <hr />

            <div className='w-full p-2 flex flex-col gap-4 text-sm'>
              <p className='text-xs'>{detalles?.descripcion}</p>
            </div>

            <hr />

            <Link to={detalles?.url} target='_blank'>
              <button className='w-full py-2 flex gap-2 justify-center first-color hover:third-color-hover rounded-b-lg text-white'>
                Leer
                <SlBookOpen className='my-auto'/>
              </button>
            </Link>

          </div>

      </div>

    </>
  )
}

export default Detalles