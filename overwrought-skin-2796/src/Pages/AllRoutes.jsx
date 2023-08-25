import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from './Homepage';
import { Login } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import { Dashboard } from './Dashboard';
import { Profile } from '../DashBoardComponents/Profile';
import { Analysis } from '../DashBoardComponents/Analysis';
import { Income } from '../DashBoardComponents/Income';
import { Expenses } from '../DashBoardComponents/Expenses';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<h3>Page Not Found 404</h3>}/>

    </Routes>
  )
}

export default AllRoutes
