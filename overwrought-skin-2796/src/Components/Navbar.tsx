import {
    Avatar,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    Image,
    Input,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";

import logonew from "../images/logonew.png"
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
 
  
  const Navbar = () => {
    
  
    return (
      <Box
        bg={"#ecbdbd"}
        style={{ position: "sticky", top: 0, zIndex: 999 }}
        
      >
        <HStack
          justify={"space-between"}
          paddingLeft={{ base: "10px", md: "10px", lg: "60px" }}
          paddingRight={{ base: "10px", md: "10px", lg: "60px" }}
        >
          <HStack spacing={"5px"}>
            
            <Image
              boxSize="80px"
              objectFit={"cover"}
              src={logonew}
              alt="moneywise"
              cursor={"pointer"}
              marginLeft={{base:"25px", md:"25px", lg:"0px"}}
            />
            <Text
              fontSize={"lg"}
              color={"black"}
              display={{ base: "none", md: "block", lg: "block" }}
            >
              MoneyWisely
            </Text>
            {/* <Text>About</Text> */}
          </HStack>
         
<HStack paddingLeft={{ base: "10px", md: "10px", lg: "60px" }}>
 
<Link to="/login">
  <Button 
    variant="outline" 
    transition="border-radius 0.3s ease-in-out"
    _hover={{
      borderRadius: "20px",
    }}
  >
    Log in
  </Button>
</Link>

<Link to="/signup">
  <Button
    colorScheme="blue"
    transition="border-radius 0.3s ease-in-out"
    _hover={{
      borderRadius: "20px",
    }}
    bgColor="blue"
    color="white"
  >
    Sign up
  </Button>
</Link>
</HStack>
        </HStack>
      </Box>
    );
  };
  
  export default Navbar;
  