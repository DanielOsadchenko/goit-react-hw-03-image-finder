import React from 'react'
export const ImageGalleryItem = ({image, tags, onClick}) => {
  return <li onClick={onClick}><img src={image} alt={tags} /></li>
}