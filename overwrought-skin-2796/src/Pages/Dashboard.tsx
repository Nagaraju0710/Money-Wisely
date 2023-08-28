
import React from 'react';
import { SideBar } from '../DashBoardComponents/SideBar';
import { styled } from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


export const Dashboard = () => {
  return (
    <DIV>
      <Navbar />
        <SideBar />
      <Footer />
    </DIV>
  )
}

const DIV = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;



