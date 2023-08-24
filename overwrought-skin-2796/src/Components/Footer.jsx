import {
    HStack,
    Heading,
    Link,
    VStack,
    Box,
    Container,
    Stack,
    Text,
    Button,
    Image,
  } from "@chakra-ui/react";
  import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
  import React from "react";
  
  const Footer = () => {
    return (
      <Box padding={"30px 30px 10px 30px"} bg={"rgb(255, 255, 255)"}>
        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          justifyContent={"space-around"}
          alignItems={"flex-start"}
        >
          <VStack alignItems={"flex-start"}>
            <Heading as={"h3"} size={"md"}>
              Company
            </Heading>
            <Link>About Us</Link>
            <Link>Blog</Link>
            <Link>Careers</Link>
            <Link>Contact Us</Link>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Heading as={"h3"} size={"md"}>
              Support
            </Heading>
            <Link>Help Center</Link>
            <Link>Safety Center</Link>
            <Link>Community Guidelines</Link>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Heading as={"h3"} size={"md"}>
              Legal
            </Heading>
            <Link>Cooking Policy</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Law Enforcement</Link>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Heading as={"h3"} size={"md"}>
              Install App
            </Heading>
            
            <Image
              _hover={{cursor:"pointer"}}
              src={
                "https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png"
              }
              width={"200px"}
              objectFit={"cover"}
            />
            
  
            <Image
              _hover={{cursor:"pointer"}}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRic3NEzq52LhkWEYfxZA6YAPTT3oYQ_6C27Q&usqp=CAU"
              }
              width={"200px"}
              objectFit={"cover"}
            />
          </VStack>
        </Stack>
        <Stack
          borderTopWidth={1}
          borderStyle={"solid"}
          marginTop={"10px"}
          paddingTop={"10px"}
          justifyContent="space-around"
          alignItems={{ base: "flex-start", md: "center", lg: "center" }}
          direction={{ base: "column", md: "row", lg: "row" }}
        >
          <Text>© 2023 MoneyWisely, All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <FaTwitter className="footer-icon" />
            <FaYoutube className="footer-icon" />
            <FaInstagram className="footer-icon" />
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  