import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Router from './routes/Router.jsx'
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <>
        <Router />

        <Toaster 
            position="bottom-right"
            richColors
            closeButton
        />
    </>
)
