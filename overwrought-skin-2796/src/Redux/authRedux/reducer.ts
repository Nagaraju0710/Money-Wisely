import { UserObject } from "../../constrain";
import { ADMIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS, USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType";

const initialState: {
  
    isLoading: boolean;
    isError: boolean;
    isAuth: boolean;
    Users: UserObject[];
    ActiveUser: UserObject;
 } ={

 isLoading:false,
 isError:false,
 isAuth:false,
 Users:[],
 ActiveUser:{
    fullname:"",
    age:0,
    email:"",
    password:"",
    budget:[],
    withdraw:[],
    subscription:[],
 },
 
 }


export const authReducer=(state=initialState,{type,payload}:{type:string,payload:any})=>{
    switch(type){

        case LOGIN_REQUEST :{
           return {...state,isLoading:true}
        }
        case LOGIN_SUCCESS :{
           return {...state,isLoading:false,isAuth:true,ActiveUser:payload}
        }
        case ADMIN_SUCCESS :{
            return {...state,isAdminAuth:true}
            }
        case SIGNUP_SUCCESS :{
        return {...state, isLoading:false}
        }
        case LOGIN_FAILURE :{
           return {...state,isLoading:false,isError:true}
        }
        case USER_REQUEST:{
            return {...state,isLoading:true}
         }
         case USER_SUCCESS:{
            return {...state,isLoading:false,Users:payload}
         }
         case USER_FAILURE:{
            return {...state,isLoading:false,isError:true}
         }
      
        case LOGOUT:{
           return initialState;
        }
        
           default:return state;
        }
}