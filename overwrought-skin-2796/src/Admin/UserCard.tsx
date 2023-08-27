import { BudgetObject, WithdrawObject, subscriptionObject } from "../constrain";
import { Avatar, Button, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

interface userObj{
    fullname:string;
    email:string;
    age?:number;
    password:string;
    id?:number;
   
    budget: BudgetObject[];
    withdraw: WithdrawObject[];
    subscription: subscriptionObject[];
  }


  export default function UserCard({id,fullname,email,password,age}:userObj) {
    return (
      <DIV>
                <Wrap>
                  <WrapItem>
                    <Avatar src="https://bit.ly/broken-link" name={fullname} />
                  </WrapItem>
                </Wrap>
  
        <h5><b>User Name :</b>{fullname}</h5>
        <p><b>Age :</b>{age}</p>
        <p><b>Email :</b>{email}</p>
        <p><b>Password :</b>{password}</p>
  
        <Button colorScheme='teal' size='xs' >
  <Link to={`/a/users/details/${id}`}>Details</Link>
        </Button>
      </DIV>
    )
  }
  
  
  const DIV = styled.section`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 7px;
  h4{
    font-size: 20px;
    font-weight: 600;
    color:#282727
  }
  
  `