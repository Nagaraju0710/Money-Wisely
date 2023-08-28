import React from 'react'
import Navbar from './AdminNavbar'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { UserObjectNew } from '../constrain'
import { Container, HStack, Heading, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Card, CardBody } from '@chakra-ui/card'
import { Avatar, Spinner } from '@chakra-ui/react'
import { useEffect } from "react"
import { SingleUserFetch } from '../Redux/AdminRedux/action'
import { styled } from 'styled-components'


export const SingleUser = () => {
  const { id } = useParams();
  console.log(id, "id")

  const single = useSelector((state: any) => state.dataReducer.singleUser);
  const isload = useSelector((state: any) => state.dataReducer.singleuserLoad);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SingleUserFetch(id))
  }, [])


  let { fullname, email, password,age, budget, withdraw, subscription } = single;


  //  let add=address[address.length-1]


  return (
    <DIV>
      <Navbar />

      {

        isload ?

          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
          :
          <Container maxW={"90%"} style={{ margin: "0 auto" }}>
            <br />
          <div>
            <Card>
              <CardBody >
                <Wrap>
                  <WrapItem>
                    <Avatar name={fullname} src="https://bit.ly/broken-link" />
                  </WrapItem>
                </Wrap>

                <Heading as='h3' size='lg' color={"#3f6c9b"}>
                  &nbsp;&nbsp;{fullname}
                </Heading>
                
                <p><b>Age :</b>{age}</p>
                <p><b>Email :</b>{email}</p>
                <p><b>Password :</b>{password}</p>
              </CardBody>
            </Card>
          </div>
            <br />

          </Container>
      }
     
    </DIV>
  );
};


const DIV = styled.section`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
padding: 7px;
h4{
  font-size: 20px;
  font-weight: 600;
  color:#282727
}

`