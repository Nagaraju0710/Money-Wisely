import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from './Homepage';
import { Login } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import { Dashboard } from './Dasboard';
import {ContactUs} from "./ContactUs"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      {/* <Route path="/contact">{<ContactUs/>}</Route> */}
      <Route path='*' element={<h3>Page Not Found 404</h3>}/>
    </Routes>
  )
}

export default AllRoutes
