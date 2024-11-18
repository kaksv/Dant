import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard';
import Customers from '../../Pages/Customers';
import Orders from '../../Pages/Orders';
import Inventory from '../../Pages/Inventory';

function AppRoutes() {
  return (
    
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/inventory' element={<Inventory />} /> 
        </Routes>
   
  )
}

export default AppRoutes;