import { Button, Link } from '@chakra-ui/react'
import React from 'react'
interface userObj{
  
  id?:number;
 
  
}
export const Income = ({id}:userObj) => {
  return (
    <>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <div style={{width: "90%", height: "90%", border: "1px solid gray", background: "gray"}}>
            <h1>Income</h1>
            </div>

            {/* <Button colorScheme='teal' size='xs' >
  
          <Link to={`/dashboard/profile/${id}`}>Details</Link>
  
        </Button> */}
        </div>
    </>
  )
}
