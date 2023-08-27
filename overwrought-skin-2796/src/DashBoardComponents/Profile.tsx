import React from 'react'

// import Navbar from './AdminNavbar'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { UserObjectNew } from '../constrain'
import { Container, HStack, Heading, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Card, CardBody } from '@chakra-ui/card'
import { Avatar, Button, Link, Spinner} from '@chakra-ui/react'
import {useEffect } from "react"
import { SingleUserFetch } from '../Redux/AdminRedux/action'


export const Profile = () => {
  const { id } = useParams();
  
    const single = useSelector((state: any) => state.dataReducer.singleUser);
    const isload = useSelector((state: any) => state.dataReducer.singleuserLoad);

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(SingleUserFetch(id))
    },[])
   
  
    let { fullname, email, password ,budget,withdraw,subscription} = single;
  return (
    <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <div style={{width: "90%", height: "90%", border: "1px solid gray", background: "gray"}}>
            <div>
        
   

{

    isload?
    
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
          <Card>
            <CardBody style={{display:"flex"}}>
              <Wrap>
                <WrapItem>
                  <Avatar name={fullname} src="https://bit.ly/broken-link" />
                </WrapItem>
              </Wrap>
             
              <Heading as='h3' size='lg' color={"#3f6c9b"}>
                &nbsp;&nbsp;{fullname}
             </Heading>

            </CardBody>
          </Card>
<br />






    </Container>
    }
      </div>

            </div>
        </div>
    </>
  )
}
