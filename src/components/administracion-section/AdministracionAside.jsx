import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FiList } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

import { useLogin } from '../../hooks/useLogin'
import { useSelector } from "react-redux"

const AdministracionAside = () => {

    const { Logout } = useLogin();
    const navigate = useNavigate();
    const aside = useSelector((state) => state.aside);

    const handleOnClick = () => {

        Logout();
        navigate("/");
    }

  return (
    <>
      <aside className={`aside-base ${aside}`}>

          <h5 className='px-2 py-3 font-bold'>Administracion de Libros</h5>

          <div className='aside-link-base'>
              <Link to="/enfermeria-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Enfermeria</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/asistencia-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Asistencia</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/produccion-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Produccion</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/plataforma-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Plataformas</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-enfermeria" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Enfermeria</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-asistencia" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Asistencia</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-produccion" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Produccion</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-plataforma" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Plataforma</h6>

              </Link>
          </div>

          <button
                onClick={handleOnClick}
                className='w-[90%] mx-auto py-2 flex gap-2 justify-center fourth-color hover:fourth-color-hover rounded-lg text-white'>
              <Link to="/" className='flex gap-2'>
              
              <FiLogOut className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Salir</h6>

              </Link>
          </button>

      </aside>
    </>
  )
}

export default AdministracionAside