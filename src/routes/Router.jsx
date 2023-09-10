import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Enfermeria from '../pages/Enfermeria'
import Produccion from '../pages/Produccion'
import Plataformas from '../pages/Plataformas'
import Asistencia from '../pages/Asistencia'
import Login from '../pages/Login'

import BaseLayout from '../layouts/BaseLayout'
import Administracion from '../layouts/AdministracionLayout'

import ProduccionLibros from '../components/administracion-section/ProduccionLibros'
import AsistenciaLibros from '../components/administracion-section/AsistenciaLibros'
import EnfermeriaLibros from '../components/administracion-section/EnfermeriaLibros'
import PlataformaLibros from '../components/administracion-section/PlataformaLibros'

import { store } from '../store/configureSlice'
import { Provider } from 'react-redux' 

import NewBookAsistencia from '../components/administracion-section/new-books/NewBookAsistencia'
import NewBookProduccion from '../components/administracion-section/new-books/NewBookProduccion'
import NewBookEnfermeria from '../components/administracion-section/new-books/NewBookEnfermeria'
import NewBookPlataforma from '../components/administracion-section/new-books/NewBookPlataforma'
import Detalles from '../components/main-section/Detalles'

const Router = () => {
  return (
    <>
        <Provider store={store}>
          <BrowserRouter>
            <BaseLayout>
              <Routes>

                <Route element={<Administracion />}>
                    
                  <Route path='/new-produccion' element={<NewBookProduccion />} />
                  <Route path='/new-enfermeria' element={<NewBookEnfermeria/>} />
                  <Route path='/new-asistencia' element={<NewBookAsistencia />} />
                  <Route path='/new-plataforma' element={<NewBookPlataforma />} />

                  <Route path='/produccion-books' element={<ProduccionLibros />} />
                  <Route path='/enfermeria-books' element={<EnfermeriaLibros />} />
                  <Route path='/asistencia-books' element={<AsistenciaLibros />} />
                  <Route path='/plataforma-books' element={<PlataformaLibros />} />

                </Route>

                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Enfermeria />} />
                <Route path='/produccion' element={<Produccion />} />
                <Route path='/plataformas' element={<Plataformas />} />
                <Route path='/asistencia' element={<Asistencia />} />
                <Route path='/details' element={<Detalles />} />Detalles
              
              </Routes>
            </BaseLayout>
          </BrowserRouter>
        </Provider>
    </>
  )
}

export default Router