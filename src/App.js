import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Basket from './components/Basket';
import { HomeContextProvider } from './context/HomeContext';
import { BasketContextProvider } from './context/BasketContext';

function App() {

  return (
    <>
      <Navbar />
      <HomeContextProvider>
        <BasketContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </BasketContextProvider>
      </HomeContextProvider>
    </>
  );
}

export default App;
