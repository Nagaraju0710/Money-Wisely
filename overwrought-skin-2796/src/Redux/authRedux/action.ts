import { Dispatch } from "react";
import { UserObject } from "../../constrain";
import { LOGIN_FAILURE, LOGIN_REQUEST, SIGNUP_SUCCESS, USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType";
import axios from "axios";



export const getUsers =()=>{
    return async(dispatch:Dispatch<{type:string}|{type:string,payload:UserObject[]}>):Promise<void>=>{
       dispatch({type:USER_REQUEST});
    axios.get(`http://localhost:8080/users`).
    then((response)=>{ dispatch({type:USER_SUCCESS,payload:response.data}); }).catch(()=>{
     dispatch({type:USER_FAILURE});
 
    });
 
    }
 }

export const SignUp= (newUser:UserObject)=>(dispatch:Dispatch<{type:string}|{type:string,payload:UserObject[]}>)=>{
    dispatch({type:LOGIN_REQUEST});
    axios.post(`http://localhost:8080/users`,newUser).
    then((response)=>{ dispatch({type:SIGNUP_SUCCESS,payload:response.data})}).catch(()=>{
     dispatch({type:LOGIN_FAILURE});
 
    });
 }
 