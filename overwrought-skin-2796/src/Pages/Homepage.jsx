import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
    useDisclosure,
  } from "@chakra-ui/react";
  
  
import { ArrowForwardIcon } from "@chakra-ui/icons";
  
import android from "../images/android.gif"
import wallet from "../images/wallet.gif"
import group from "../images/group.gif"
import finance from "../images/finance.gif"
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import SignUpPage from "./SignUpPage";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

  AOS.init();
  
  const HomePage = () => {
    
    return (

      <>
        <Navbar />
      
      
      <Box bg={"#f5f5ed"}>
        
        <Container maxW={"7xxl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.600",
                    zIndex: -1,
                    color:"black"
                  }}
                >
                  MoneyWisely,
                </Text>
                <br />
                <Text fontSize={"30px"} as={"span"} color={"#b90707"}>
                  Manage your finances wisely
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                <span style={{ fontWeight: "bold" }}>MoneyWisely</span> is a fintech
                mobile application that aims to help manage users finance by{" "}
                <span style={{ fontWeight: "bold" }}>Alerting users</span> when
                they are close to their spending limit and also give{" "}
                <span style={{ fontWeight: "bold" }}>helpful tips</span> to help
                improve their spending habits
              </Text>
              <Stack alignItems={"center"}>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"animation"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={finance}
                />
              </Box>
            </Flex>
          </Stack>
  
          <div
            data-aos="fade-up"
          >
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: "column", md: "row" }}
            >
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Box
                  position={"relative"}
                  height={"300px"}
                  rounded={"2xl"}
                  boxShadow={"2xl"}
                  width={"full"}
                  overflow={"hidden"}
                >
                  <Image
                    alt={"animation"}
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    h={"100%"}
                    src={android}
                  />
                </Box>
              </Flex>
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text fontSize={"30px"} as={"span"} color={"#b90707"}>
                  MoneyWisely, the best buddy for your financial budget
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  With <span style={{ fontWeight: "bold" }}>MoneyWisely</span> , you
                  can easily track your{" "}
                  <span style={{ fontWeight: "bold" }}>expenses</span>, set{" "}
                  <span style={{ fontWeight: "bold" }}>budget</span> goals, and
                  take control of your finances like never before
                </Text>
              </Stack>
            </Stack>
          </div>
  
          <div
            data-aos="fade-up"
          >
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text fontSize={"30px"} as={"span"} color={"#b90707"}>
                    Effortlessly manage your money with MoneyWisely
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  With <span style={{ fontWeight: "bold" }}>MoneyWisely</span>makes
                  budgeting simple and stress-free. giving you the power to make{" "}
                  <span style={{ fontWeight: "bold" }}>smart</span> financial
                  decisions.
                </Text>
              </Stack>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Box
                  position={"relative"}
                  height={"300px"}
                  rounded={"2xl"}
                  boxShadow={"2xl"}
                  width={"full"}
                  overflow={"hidden"}
                >
                  <Image
                    alt={"animation"}
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    h={"100%"}
                    src={
                     wallet
                    }
                  />
                </Box>
              </Flex>
            </Stack>
          </div>
  
          <div
            data-aos="fade-up"
          >
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: "column", md: "row" }}
            >
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Box
                  position={"relative"}
                  height={"300px"}
                  rounded={"2xl"}
                  boxShadow={"2xl"}
                  width={"full"}
                  overflow={"hidden"}
                >
                  <Image
                    alt={"animation"}
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                    h={"100%"}
                    src={group}
                  />
                </Box>
              </Flex>
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={{ base: 1.1, md: 1.1, lg: 0.7 }}
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text fontSize={"30px"} as={"span"} color={"#b90707"}>
                    Say goodbye to financial stress with MoneyWisely
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  <span style={{ fontWeight: "bold" }}>MoneyWisely</span> helps you
                  stay on top of your spending, providing you with the insights
                  and tools you need to achieve{" "}
                  <span style={{ fontWeight: "bold" }}>financial freedom.</span>
                </Text>
              </Stack>
            </Stack>
          </div>
  
          <div
            data-aos="fade-up"
          >
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
              className="container-feedback"
            >
              <VStack className="feedback" boxShadow='dark-lg'>
                <Text>
                  "MoneyWisely keeps me on track! Alerts & tips make money
                  management a breeze."
                </Text>
                <Heading size={"md"}>- Mahesh Rao</Heading>
              </VStack>
              <VStack className="feedback" boxShadow='dark-lg'>
                <Text>
                  "MoneyWisely keeps me on track! Alerts & tips make money
                  management a breeze."
                </Text>
                <Heading size={"md"}>- Nikhil Verma</Heading>
              </VStack>
              <VStack className="feedback" boxShadow='dark-lg'>
                <Text>
                  "MoneyWisely keeps me on track! Alerts & tips make money
                  management a breeze."
                </Text>
                <Heading size={"md"}>- Naga Lonka</Heading>
              </VStack>
              <VStack className="feedback" boxShadow='dark-lg'>
                <Text>
                  "MoneyWisely keeps me on track! Alerts & tips make money
                  management a breeze."
                </Text>
                <Heading size={"md"}>- Siddhesh Gore</Heading>
              </VStack>
              <VStack className="feedback" boxShadow='dark-lg'>
                <Text>
                  "MoneyWisely keeps me on track! Alerts & tips make money
                  management a breeze."
                </Text>
                <Heading size={"md"}>- Ranjeet Gupta</Heading>
              </VStack>
              <VStack className="feedback" boxShadow='dark-lg'>
                <Text>
                  "MoneyWisely keeps me on track! Alerts & tips make money
                  management a breeze."
                </Text>
                <Heading size={"md"}>- Nithin Jayaraj</Heading>
              </VStack>
            </Grid>
          </div>
        </Container>

        <br />

      </Box>

      <Footer />
      </>
   
    );
  };
  
  export default HomePage;
  