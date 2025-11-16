import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Homepage from './pages/Homepage';
import Restaurant from './pages/Restaurant';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';


const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="pt-16 pb-20">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App