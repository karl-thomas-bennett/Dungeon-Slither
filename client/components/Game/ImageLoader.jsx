import React from 'react'

import imageList from '../../utils/imageList'

function ImageLoader() {
  return (
    <>
      {imageList.map((image, i) => {
        return <img key={i} src={'/segments/' + image + '.png'} alt="Snake" style={{ display: "none" }} />
      })}
    </>
  )
}

export default ImageLoader
