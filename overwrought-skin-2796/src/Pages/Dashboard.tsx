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
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`



