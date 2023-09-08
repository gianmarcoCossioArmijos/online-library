import React from 'react'

import { GoCodeOfConduct } from "react-icons/go";

const Marquee = () => {
  return (
    <div className='marquee-base'>

        <marquee>

            Bienvenido a la 
            <strong> Biblioteca</strong> Virtual
            <GoCodeOfConduct className='w-[30px] h-[30px] inline ml-8 mr-2'/>

        </marquee>

    </div>
  )
}

export default Marquee