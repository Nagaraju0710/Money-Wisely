
import { useToast } from "@chakra-ui/toast";
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { UserObject } from "../constrain";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SignUp, getUsers } from "../Redux/authRedux/action";





export const SignUpPage = () => {
  const toast = useToast();
  const [user,setUser] = useState<UserObject>({ fullname:"",
email: "",password: "",budget:[],
withdraw:[],subscription:[],age:0,
});

const navigate=useNavigate();
const dispatch: Dispatch<any> =useDispatch();
const AllUser =useSelector((store:any)=>store.authReducer.Users)

useEffect(() => {

  dispatch(getUsers())
  // getUsers(dispatch)
  
  },[])

const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
  const {name,value}=e.target;
  const newUser = {...user,[name]:value};
  setUser(newUser);
    }

    const handleSubmit =()=>{
      console.log("Submit",user)
      if(user.email === "" || user.password === "" ){
        // alert("Please enter valid data");
        toast({
          title: 'valid email',
          description: 'give valid data.',
          status: 'warning', 
          duration: 2000,  
          isClosable: true, 
        });
  
  
      }else if (Array.isArray(AllUser)) {
  
      
  let userPrasent = AllUser.find((el:UserObject)=>{
    return el.email==user.email;
  })
  console.log(userPrasent,"user")
  
       if(!userPrasent){
        // alert("You already have a account with this email address")
        toast({
          title: 'already registered email',
          description: 'You already have a account with this email address.',
          status: 'error', 
          duration: 2000,  
          isClosable: true, 
        });
        setUser({ fullname:"",
      email: "",password: "",budget:[],
      withdraw:[],subscription:[],age:0,
      
      })
       }else{
        dispatch(SignUp(user))
        // alert("your registration is successful")
        setUser({ fullname:"",
      email: "",password: "",budget:[],
      withdraw:[],subscription:[],age:0,
      
      })
        toast({
          title: 'Signup Success',
          description: 'your registration is successful.',
          status: 'success', 
          duration: 2000,  
          isClosable: true, 
        });
        navigate("/login");
       }
      }
      
    }

  return (
    <div>
      <div style={{display:"flex",}}>
      <div style={{marginTop:"100px"}}>
                    <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />
                </div>
      <Div>

        <div>
          <h2>SIGNUP PAGE</h2>

          <input type="text" name="fullname" placeholder='Full Name' value={user.fullname} onChange={handleChange}/>
          <br />

          <input type="number" name="age" placeholder='Age' value={user.age} onChange={handleChange}/>
          <br />
          <input type="email" name="email" placeholder='Email' value={user.email} onChange={handleChange}/>
          <br />

          <input type="password" name="password" placeholder='Password' value={user.password} onChange={handleChange}/>
          <br />

          <button type="submit" onClick={handleSubmit}>SignUp</button>
          <br />
          
          <span><p>alreday have an account?   <Link to="/login">Login</Link></p></span>
        </div>
      </Div>
      </div>
      </div>
)
}





const Div = styled.div`
padding-top:70px;
text-align: center;
  
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin-top: 0;
  border: 1px solid black;
  color: black;
  background-color:lightblue;

  h1{
   margin-top:20px;
   margin-bottom:20px;
   font-size:30px;
   font-weight:bold;
  }
  h2{
   margin-top:20px;
   margin-bottom:20px;
   font-size:20px;
   font-weight:bold;
   color:black;
  }

  div {
   
    margin :auto;
    width: 500px;
    height: 450px;

    h2 {
      margin-left: 10px;
    }

    input[type="text"],[type="email"],[type="password"],[type="number"] {
      width: 80%;
      height: 40px;
      margin: auto;
      margin-bottom: 20px;
      box-shadow: rgb(246, 248, 250) 0px 20px 30px -10px;
    }

    input[type="text"],[type="email"],[type="password"],[type="number"]::placeholder {
      padding-left: 20px;
      color: #3b3939; /* Placeholder text color */
      font-style: italic; /* Placeholder text style */
    }
input[type="number"]{
  width: 400px;
} 
    button[type="submit"] {
      width: 80%;
      height: 40px;
      font-weight: bold;
      background-color: #f6f8f6;
      color: #726a6a;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button[type="submit"]:hover {
      border: 2px solid black;
    }

    span {
      margin: 20px;
      cursor: pointer;
      color: black;
      text-decoration: none;

      a {
        color: #a31919;
        border: none;
      }
    }

    span:hover{
   background-color:white;
  }
  
  }
  :hover{
   box-shadow: rgba(142, 141, 141, 0.966) 0px 54px 55px, rgba(250, 249, 249, 0.966) 0px -12px 30px, rgba(251, 250, 250, 0.943) 0px 4px 6px, rgba(253, 252, 252, 0.916) 0px 12px 13px, rgba(249, 248, 248, 0.961) 0px -3px 5px;
   }
`;
