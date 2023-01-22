import React from "react";
import { Route, Routes } from "react-router";
import { Homepage } from "../Mushtaq/Homepage";
import Login from "../Akash/Login/Login";
import Signup from "../Akash/Login/Signup";
import Admin from "../Jagriti/Admin";
import Product from "../Manisha/Pages/Product";
import SingleProduct from "../Manisha/Pages/SingleProduct";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default AllRoutes;
