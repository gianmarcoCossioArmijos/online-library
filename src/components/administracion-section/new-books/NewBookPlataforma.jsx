import React, { useState } from 'react'

import { usePlataformas } from '../../../hooks/usePlataformas';

import { FiSave } from "react-icons/fi";
import { toast } from 'sonner';

const NewBookPlataforma = () => {
  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
    editorial: "",
    publicacion: "",
    isbn: "",
    descripcion: "",
    imagen: "",
    url: "",
    seccion: "librosPlataforma"
  });

  const {setPlataformas} = usePlataformas();

  const handleChange = (event) => {

  const value = event.target.value;
  const name = event.target.name;
  setLibro({...libro, [name]: value})
  }

  const hanldeSubmit = async (event) => {

    event.preventDefault();
    const response = await setPlataformas(libro);
    
    if (!response) {

        setLibro({
            titulo: "",
            autor: "",
            editorial: "",
            publicacion: "",
            isbn: "",
            descripcion: "",
            imagen: "",
            url: "",
            seccion: "librosPlataforma"
        })
        toast.success("Libro registrado!");
    } else {

        toast.error("Error al registrar libro!");
    }
  }

  return (
    <div className='form-base mx-auto my-12 self-center'>

        <h3 className='mt-3 mb-6 font-bold text-lg text-center'>Nuevo Libro de Plataformas</h3>

        <form onSubmit={hanldeSubmit}>

            <label>
                Titulo
                <input
                    type="text"
                    name='titulo'
                    value={libro?.titulo}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese titulo del libro'
                    required/>
            </label>

            <label>
                Autor
                <input
                    type="text"
                    name='autor'
                    value={libro?.autor}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese autor del libro'
                    required/>
            </label>

            <label>
                Editorial
                <input
                    type="text"
                    name='editorial'
                    value={libro?.editorial}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese editorial del libro'
                    />
            </label>

            <label>
                Fecha de publicacion
                <input
                    type="date"
                    name='publicacion'
                    value={libro?.publicacion}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese fecha de publicacion del libro'
                    />
            </label>

            <label>
                ISBN
                <input
                    type="text"
                    name='isbn'
                    value={libro?.isbn}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese ISBN del libro'
                    />
            </label>

            <label>
                Descripcion
                <input
                    type="text"
                    name='descripcion'
                    value={libro?.descripcion}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese descripcion del libro'
                    />
            </label>

            <label>
                Imagen
                <input
                    type="url"
                    name='imagen'
                    value={libro?.imagen}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese URL de la imagen del libro'
                    />
            </label>

            <label>
                URL del Libro
                <input
                    type="url"
                    name='url'
                    value={libro?.url}
                    className='input-base'
                    onChange={handleChange}
                    placeholder='Ingrese URL del libro (Google Drive)'
                    required/>
            </label>
            
            <button
                type="submit"
                value="Registrar"
                className='button-base w-full'
                >
                <FiSave className='icon-base mx-auto'/>
            </button>

        </form>
    </div>
  )
}

export default NewBookPlataforma