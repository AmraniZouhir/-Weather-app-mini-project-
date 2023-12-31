import React from 'react'
import imgBg from '../assets/img/mado-el-khouly-MA8YoAoKpfY-unsplash.jpg'
import '../SearchBar/stayleImg.scss'

export default function ImgBackrond() {
  return (
    <>
      <div className='img-backgrond position-fixed d-flex top-0 bottom-0 end-0 start-0'>
        <img className='img' src={imgBg} alt='Image Backgrond'></img>

      </div>
    </>


  )
}
