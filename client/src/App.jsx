import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Homepage from './assets/Homepage';
import Restaurant from './pages/Restaurant';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';


const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/restaurant' element={<Restaurant />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App