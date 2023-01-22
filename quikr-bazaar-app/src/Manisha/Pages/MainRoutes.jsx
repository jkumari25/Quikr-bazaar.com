import React from 'react';
import Product from './Product';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Product />}/>
        <Route path='/product/:id'  element={<SingleProduct />}/>
        <Route path="*" element={<h3>Page Not Found</h3>}/>
    </Routes>
  );
};

export default MainRoutes;