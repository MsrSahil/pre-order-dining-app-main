import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App