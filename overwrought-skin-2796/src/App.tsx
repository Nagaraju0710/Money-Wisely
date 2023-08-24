import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SignUpPage } from './Pages/SignUpPage';
import { Login } from './Pages/LoginPage';

import HomePage from './Pages/Homepage';
import AllRoutes from './Pages/AllRoutes';


function App() {
  return (
    <div className="App">

      {/* <SignUpPage/> */}
      {/* <Login/> */}
<AllRoutes/>
      
      {/*<HomePage/>*/}

    </div>
  );
}

export default App;
