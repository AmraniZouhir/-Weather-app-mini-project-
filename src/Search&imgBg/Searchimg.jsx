import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ImgBackrond from '../SearchBar/imgBackrond'
import Weather from '../Weather/Weather'
import { Container } from 'react-bootstrap'

export default function Searchimg() {
  return (
    <>
        <ImgBackrond/>
        
       

        <Container>
        <SearchBar/>
        <Weather/>
        </Container>
        
    </>
  )
}
