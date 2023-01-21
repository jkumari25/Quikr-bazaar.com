import React from 'react'
import { Route, Routes } from 'react-router'
import { Homepage } from '../Mushtaq/Homepage'
import Login from '../Akash/Login/Login'
import Signup from '../Akash/Login/Signup'
import Admin from '../Jagriti/Admin'

const AllRoutes = () => {
  return (
    <Routes>
<Route path="/" element={<Homepage/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/admin" element={<Admin/>} />
    </Routes>
  )
}

export default AllRoutes