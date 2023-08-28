import axios from "axios";
import { POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

export const postProduct=(productData)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios
    .post("  http://localhost:8080/income",productData )
    .then((res)=>{
        console.log(res.data);
        dispatch({type:POST_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch(({type:PRODUCT_FAILURE,payload:err.message}))
    })
}


