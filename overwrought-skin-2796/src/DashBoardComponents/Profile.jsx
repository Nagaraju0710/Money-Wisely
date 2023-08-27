import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  Container,
  Avatar,
  Heading,
  HStack,
  Divider,
  VStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  EditIcon,
  EmailIcon,
  LockIcon,
  PhoneIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
// import { signupData } from "../utils/userData";
// import { useSelector } from "react-redux";
 import { IoCreateOutline } from "react-icons/io5";

export const Profile = () => {
  // const [userInfo, setUserInfo] = useState(signupData);
   const [show, setShow] = useState(false);
  // const [edit, setEdit] = useState(true);
   const handleClick = () => setShow(!show);

  // const userData = useSelector((store) => store.authReducer.User);

  // const handleChange = () => {};

  // const handleEdit = ()=>{
  //   setEdit(!edit);
  // }

  // // destructuring userInfo state
  // const { name, username, email, password , age} = userData;

  return (
    <Box
      padding={"20px"}
      bg={"white"}
      margin={"10px auto"}
      marginTop={"50px"}
      width={{base:"100%", md:"90%", lg:"80%"}}
      borderRadius={"20px"}
      bgColor={"#d2cf72"}
    >
      <HStack justifyContent={"space-between"} alignItems={{base:"flex-start", md:"center", lg:"center"}}>
        <Stack direction={{base:"column", md:"row", lg:"row"}} spacing={"20px"} alignItems={{base:"flex-start", md:"center", lg:"center"}}>
            <Box>
            <Avatar
                size={{base:"xl", md:"xl", lg:"2xl"}}
                name="Segun Adebayo"
                src="https://cdn-icons-png.flaticon.com/512/488/488938.png?w=740&t=st=1690110831~exp=1690111431~hmac=8170b637d79793cc753a647be4ed469a97f246e10c1cfd81363806365c7f5bb9"
            />
            </Box>
            <VStack alignItems={"flex-start"}>
            <Heading as="h3" size="md">
                {/* {userData.name} */}
            </Heading>
            <Text>
                <EmailIcon display={{base:"none", md:"inline", lg:"inline"}} /> 
                {/* {userData.email} */}
            </Text>
            <Text>
                <PhoneIcon display={{base:"none", md:"inline", lg:"inline"}} />
                +91 {"XXXXXXXXXX"}
            </Text>
            </VStack>
        </Stack>
        <IoCreateOutline style={{fontSize:"40px", color:"#E64158", marginRight:"20px"}} />
        {/* onClick={handleEdit} */}
      </HStack>
      
      <Divider style={{ margin: "15px" }} />
      <FormControl marginBottom={"5px"}>
        <FormLabel>Name : </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EditIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            name="name"
            // value={name}
            placeholder="Name"
            // isDisabled={edit}
            // onChange={handleChange}
          />
        </InputGroup>
      </FormControl>

      <FormControl marginBottom={"5px"}>
        <FormLabel>Username : </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EditIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="username e.g. abc47"
            name="username"
            // value={username}
            // isDisabled={edit}
            // onChange={handleChange}
          />
        </InputGroup>
      </FormControl>

      <FormControl marginBottom={"5px"}>
        <FormLabel>Age : </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EditIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="number"
            placeholder="username e.g. abc47"
            name="username"
            // value={age}
            // isDisabled={edit}
            // onChange={handleChange}
          />
        </InputGroup>
      </FormControl>

      <FormControl marginBottom={"5px"}>
        <FormLabel>Email : </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="email"
            name="email"
            // value={email}
            // isDisabled={edit}
            placeholder="Email address"
            // onChange={handleChange}
          />
        </InputGroup>
      </FormControl>

      <FormControl marginBottom={"5px"}>
        <FormLabel>Password : </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <LockIcon color="gray.300" />
          </InputLeftElement>
          <Input
            pr="4.5rem"
            //type={show ? "text" : "password"}
            placeholder="Enter password"
            // onChange={handleChange}
            name="password"
            // isDisabled={edit}
            // value={password}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              style={{ background: "white" }}
              // onClick={handleClick}
            >
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="green" marginTop={"10px"} loadingText="Submitting">
        Submit
      </Button>
    </Box>
  );
};
