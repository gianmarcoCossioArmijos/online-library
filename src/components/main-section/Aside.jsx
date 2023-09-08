import React from 'react'

import { ImLibrary } from "react-icons/im";
import { ImDisplay } from "react-icons/im";
import { ImAidKit } from "react-icons/im";
import { ImLeaf } from "react-icons/im";

import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

const Aside = () => {

  const aside = useSelector((state) => state.aside);

  return (
    <>
        <aside className={`aside-base ${aside}`}>

          <h5 className='px-2 py-3 font-bold'>Libros por Carrera</h5>

            <div className='aside-link-base'>
              <Link to="/" className='flex gap-2'>

                <ImAidKit className='icon-base w-1/3 self-center'/>
                <h6 className='self-center w-2/3'>Enfermeria Tecnica</h6>

              </Link>
            </div>

            <div className='aside-link-base'>
              <Link to="/produccion" className='flex gap-2'>

                <ImLeaf className='icon-base w-1/3 self-center'/>
                <h6 className='aelf-center w-2/3'>Produccion Agropecuaria</h6>

              </Link>
            </div>

            <div className='aside-link-base'>
              <Link to="/plataformas" className='flex gap-2'>
                
                <ImDisplay className='icon-base w-1/3 self-center'/>
                <h6 className='self-center w-2/3'>Arquitectura de Plataformas</h6>

              </Link>
            </div>

            <div className='aside-link-base'>
              <Link to="/asistencia" className='flex gap-2'>
                
                <ImLibrary className='icon-base w-1/3 self-center'/>
                <h6 className='self-center w-2/3'>Asistencia Administrativa</h6>
                
              </Link>
            </div>

        </aside>
    </>
  )
}

export default Aside