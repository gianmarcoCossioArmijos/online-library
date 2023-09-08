import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth')));
    
    const saveAuth = (auth) => {

        localStorage.setItem('auth', JSON.stringify(auth));
        setIsAuth(auth);
        return JSON.parse(localStorage.getItem('auth'));
    }

    const cleanAuth = () => {

        setIsAuth(false);
        localStorage.setItem('auth', JSON.stringify(false));
    }

    return (
        <AuthContext.Provider value={{ isAuth, saveAuth, cleanAuth }}>
            {children}
        </AuthContext.Provider>
    )
}