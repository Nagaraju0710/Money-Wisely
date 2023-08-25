import axios from "axios";

import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, GET_USER_SUCCESS, SINGLE_USER_REQ, SINGLE_USER_SUCCESS, USER_REQ ,DELETE_DATA_FAILURE, DELETE_DATA_SUCCESS, GET_TOTAL_PAGE, POST_PRODUCT_SUCCESS} from "./actionType";


import { Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk'; 
import { RootState } from ".";






 export const fetchUserData:any=(dispatch: Dispatch)=>{
  dispatch({type:USER_REQ})

  axios.get(`http://localhost:8080/users`)
.then((res)=>{

  dispatch({type:GET_USER_SUCCESS,payload:res.data})
  })
 }


 export const SingleUserFetch:any=(id:number)=>(dispatch: Dispatch)=>{
  dispatch({type:SINGLE_USER_REQ})
  axios.get(`http://localhost:8080/users/${id}`)
  .then((res)=>{
console.log(res.data);

    dispatch({type:SINGLE_USER_SUCCESS,payload:res.data})
    })
 }




//  <*****************************Edit****************************************>
// export const updatedData=()=>(dispatch:any)=>{
//   axios
//   // .patch(`http://localhost:8080/products/${id}`,newData)
//   // .then((res)=>{
//     // dispatch({type:PATCH_PRODUCT_SUCCESS});
//   // })
//   // .catch((err)=>{
//     // dispatch(failureAction());
//   // })
// }