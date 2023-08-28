
import React from 'react';
import { SideBar } from '../DashBoardComponents/SideBar';
import { styled } from 'styled-components';


export const Dashboard = () => {
  return (
    <DIV>
        <SideBar />
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



