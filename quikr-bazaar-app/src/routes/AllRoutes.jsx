import React from "react";
import { Route, Routes } from "react-router";
import { Homepage } from "../Mushtaq/Homepage";
import Login from "../Akash/Login/Login";
import Signup from "../Akash/Login/Signup";
import Admin from "../Jagriti/Admin";
import Product from "../Manisha/Pages/Product";
import SingleProduct from "../Manisha/Pages/SingleProduct";
import { CartPage } from "../Akash/Cart/CartPage";
import Success from "../Akash/Success";
import Adminlogin from "../Jagriti/AdminPanel/Adminlogin";
import Payment from "../Akash/payment";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/CartPage" element={<CartPage/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/adminlogin" element={<Adminlogin/>} />

      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default AllRoutes;
