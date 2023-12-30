import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Searchimg from '../Search&imgBg/Searchimg';

export default function AppRouter() {
    return (
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/Search&imgBg' element={<Searchimg/>}/>
       </Routes>
       </BrowserRouter>
    );
}
