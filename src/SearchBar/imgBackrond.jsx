import React from 'react'
import imgBg from '../assets/img/todd-trapani-6vXQrXVFXjI-unsplash.jpg'
import '../SearchBar/stayleImg.scss'

export default function ImgBackrond() {
  return (
    <div className='position-fixed d-flex top-0 bottom-0 end-0 start-0'>
        <img className='img-bg' src={imgBg} alt='Image Backgrond'></img>
        
    </div>

  )
}
