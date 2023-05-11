import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Basket from './components/Basket';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then((data) => setProducts(data.data))
      .finally(() => {
        setLoading(false);
      });;
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} basket={basket} loading={loading}/>} />
        <Route path="/basket" element={<Basket basket={basket} />} />

      </Routes>
    </>
  );
}

export default App;
