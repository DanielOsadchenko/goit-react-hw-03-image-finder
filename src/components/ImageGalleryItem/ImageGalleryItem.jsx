import React from 'react'
export const ImageGalleryItem = ({image, tags}) => {
  return <li><img src={image} alt={tags} /></li>
}