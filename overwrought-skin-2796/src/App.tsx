import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignUpPage } from './Pages/SignUpPage';
import { Login } from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      {/* <SignUpPage/> */}
      <Login/>
    </div>
  );
}

export default App;
