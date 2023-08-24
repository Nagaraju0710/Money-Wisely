import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const Login = () => {
    return (
        <div>
            <div style={{display:"flex",}} >
                <div style={{marginTop:"100px"}}>
                    <img src="https://media.tenor.com/p0G_bmA2vSYAAAAC/login.gif" alt="" />
                </div>
                <Div>

                    <div>
                        <h2>LOGIN PAGE</h2>

                        <input type="email" name="email" placeholder='Email' />
                        <br />

                        <input type="password" name="password" placeholder='Password' />
                        <br />

                        <button type="submit">Login</button>
                        <br />

                        <span><p>Create an new account?   <Link to="/signup">SignUp</Link></p></span>
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
  width: 420px;
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

    input[type="submit"]:hover {
      border: 2px solid black;
    }

    span {
      margin: 20px;
      cursor: pointer;
      color: black;
      text-decoration: none;

      a {
        color: #d30a0a;
        border: none;
      }
    }

    span:hover{
   background-color:white;
  }
  
  }
  :hover{
   box-shadow: rgba(177, 226, 78, 0.966) 0px 54px 55px, rgba(250, 249, 249, 0.966) 0px -12px 30px, rgba(251, 250, 250, 0.943) 0px 4px 6px, rgba(253, 252, 252, 0.916) 0px 12px 13px, rgba(249, 248, 248, 0.961) 0px -3px 5px;
   }
`;