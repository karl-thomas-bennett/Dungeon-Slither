import React from 'react'

import imageDictionary from '../utils/imageDictionary'

function ImageLoader() {
  return (
    <>
      {imageDictionary.map(image => {
        <img src={image.name} alt="Snake" display='none' />
      })}
    </>
  )
}

export default ImageLoader