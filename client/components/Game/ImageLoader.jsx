import React from 'react'

import imageDictionary from '../../utils/imageDictionary'

function ImageLoader() {
  return (
    <>
      {imageDictionary.map((image, i) => {
        return <img key={i} src={'/segments/' + image.name + '.png'} alt="Snake" style={{ display: "none" }} />
      })}
    </>
  )
}

export default ImageLoader
