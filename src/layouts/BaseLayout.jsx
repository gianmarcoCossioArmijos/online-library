import React from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Marquee from '../components/header/Marquee'

const BaseLayout = (props) => {
  return (
    <div className='layout-base'>

        <Marquee />

        <Header />

        <div className='children-layout-base'>
            {props.children}
        </div>

        <Footer />

    </div>
  )
}

export default BaseLayout