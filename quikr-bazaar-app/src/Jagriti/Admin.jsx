import React,{useState} from 'react'
import AdminSide from './AdminPanel/AdminSidebar';
import AdminNavbar from './AdminPanel/AdminNavbar';
// import AdminFooter from './AdminFooter';
import AdminProduct from './AdminPanel/AdminProduct';
// import Delivery from './AdminPanel/Delivery';
import Delete from './AdminPanel/Delete';
import {
  Box,
  
} from "@chakra-ui/react";


const Admin = () => {
  const [showPage , setShowPage] = useState("AdminProduct")
  return (
    <div>
       <AdminNavbar setShowPage={setShowPage}/>
       <Box>
        <Box>
          <AdminSide/>
        </Box>
        <Box>
        {showPage == "AdminProduct" ? <AdminProduct /> : null}
        {/* {showPage == "Delivery" ? <Delivery /> : null} */}
        {showPage == "Delete" ? <Delete/> : null}
        </Box>
       </Box>
      
      
      {/* <AdminFooter/> */}
    </div>
  )
}

export default Admin
