import React from 'react'

import defaultImage from '../assets/default_thumb.png'

const DefaultThumbnail = () => {
  return (
    <>
        <img
        src={defaultImage}
        className='libro-image'
        alt="default_thumb" />
    </>
  )
}

export default DefaultThumbnail