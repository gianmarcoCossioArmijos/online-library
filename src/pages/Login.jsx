import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../hooks/useLogin.js'
import { AuthContext } from '../context/AuthContext.jsx';

import { Toaster, toast } from 'sonner';

const Login = () => {
    const [usuario, setUsuario] = useState({ dni: "", clave: ""});
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth') || false));

    const { getLogin } = useLogin();
    const navigate = useNavigate();
    const { saveAuth } = useContext(AuthContext);

    useEffect(() => {

        if (isAuth === true) {

            navigate("/administracion");
        } else {

            navigate("/login");
        }
    },[])

    const handleChange = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setUsuario({...usuario, [name]: value})
    }

    const hanldeSubmit = async (event) => {

        event.preventDefault();

        const response = await getLogin(usuario.dni, usuario.clave);

        if (response === true) {

            saveAuth(isAuth);
            toast.success('Bienvenido al Panel de Control');
        } else {

            setUsuario({ dni: "", clave: ""});
            toast.error('Usuario o contraseña incorrectos');
            navigate("/plataforma-books");
        }
    }

  return (
    <div className='page-base m-auto'>

        <Toaster 
            position="bottom-right"
            richColors
            closeButton/>
        
        <div className='card-base m-auto self-center my-12'>

            <h3 className='mt-3 mb-6 font-bold text-lg text-center'>Iniciar Sesion</h3>

            <form onSubmit={hanldeSubmit}>

                <label>
                    Usuario
                    <input
                        type="number"
                        name='dni'
                        value={usuario.dni}
                        className='input-base'
                        onChange={handleChange}
                        required/>
                </label>

                <label>
                    Clave
                    <input
                        type="password"
                        name='clave'
                        value={usuario.clave}
                        className='input-base'
                        onChange={handleChange}
                        required/>
                </label>
                
                <input
                    type="submit"
                    value="Ingresar"
                    className='button-base w-full'
                    />

            </form>
        </div>

    </div>
  )
}

export default Login