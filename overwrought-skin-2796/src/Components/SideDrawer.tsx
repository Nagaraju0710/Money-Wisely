import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <Button>
              <Link to="/dashboard/profile">Profile</Link>
            </Button>
            <Button>
              <Link to="/dashboard/analysis">Analysis</Link>
            </Button>
            <Button>
              <Link to="/dashboard/expenses">Expenses</Link>
            </Button>
            <Button>
              <Link to="/dashboard/income">Income</Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer;


