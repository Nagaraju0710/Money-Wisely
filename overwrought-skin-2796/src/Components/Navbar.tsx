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
//   import logonew from "../images/logo.png"
import logonew from "../images/logonew.png"
  import React, { useEffect, useState } from "react";
//   import logo from "./logo.png";
//   import LoginPage from "../pages/LoginPage";
//   import SignupPage from "../pages/SignupPage";
  import { HamburgerIcon } from "@chakra-ui/icons";
//   import { burger } from "../utils/icons";
  import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//   import { useNavigate } from "react-router-dom";
//   import DashBoard from "../pages/DashBoard";
  
  const Navbar = () => {
    // const [scroll, setScroll] = useState(false);
    // const loginDisclosure = useDisclosure();
    // const signupDisclosure = useDisclosure();
    // const navigate = useNavigate();
  
    //Redux Store
    // const isAuth = useSelector((store)=> store.authReducer.isAuth)
    // const User = useSelector((store)=> store.authReducer.User)
  
    //Navbar Sticky 
    // useEffect(() => {
    //   window.addEventListener("scroll", () => {
    //     setScroll(window.scrollY > 0);
    //   });
    // }, []);
  
    // Handle Dashboard BTN
    // const handleDashboardBtn = ()=>{
    // //   navigate("/dashboard")
    // }
    
  
    return (
      <Box
        bg={"#121212"}
        style={{ position: "sticky", top: 0, zIndex: 999 }}
        // className={scroll ? "active-scroll" : ""}
      >
        <HStack
          justify={"space-between"}
          paddingLeft={{ base: "10px", md: "10px", lg: "60px" }}
          paddingRight={{ base: "10px", md: "10px", lg: "60px" }}
        >
          <HStack spacing={"5px"}>
            {/* <HamburgerIcon  color={"white"} fontSize={"25px"} marginLeft={"10px"} display={{base:"block", md:"block", lg:"none"}}  /> */}
            <Image
              boxSize="80px"
              objectFit={"cover"}
              src={logonew}
              alt="moneywise"
              cursor={"pointer"}
              marginLeft={{base:"25px", md:"25px", lg:"0px"}}
            />
            <Text
              fontSize={"md"}
              color={"white"}
              display={{ base: "none", md: "block", lg: "block" }}
            >
              MoneyWisely
            </Text>
          </HStack>
          {/* {
            isAuth ? <HStack spacing={{ base: "5px", md: "10px", lg: "20px" }}>
              <Button
              color={"white"}
              variant={"outline"}
              transition={"border-radius 0.3s ease-in-out"}
              _hover={{
                borderRadius: "20px",
              }}
              onClick={handleDashboardBtn}
            >
              Dashboard
            </Button>
            <Avatar name={User?.name} src='https://bit.ly/broken-link' />
          </HStack> : <HStack spacing={{ base: "5px", md: "10px", lg: "20px" }}>
            <Button
              color={"white"}
              variant={"outline"}
              transition={"border-radius 0.3s ease-in-out"}
              _hover={{
                borderRadius: "20px",
              }}
            //   onClick={loginDisclosure.onOpen}
            >
              Log in
            </Button>
            <Button
              colorScheme="blue"
              transition={"border-radius 0.3s ease-in-out"}
              _hover={{
                borderRadius: "20px",
              }}
              onClick={signupDisclosure.onOpen}
            >
              Sign up
            </Button>
          </HStack>
          } */}
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
  
        {/* <LoginPage isOpen={loginDisclosure.isOpen} onClose={loginDisclosure.onClose} /> */}
        {/* <SignupPage isOpen={signupDisclosure.isOpen} onClose={signupDisclosure.onClose} /> */}
        
      </Box>
    );
  };
  
  export default Navbar;
  