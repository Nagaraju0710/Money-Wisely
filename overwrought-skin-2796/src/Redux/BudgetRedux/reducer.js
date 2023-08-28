import { POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

const initalState={
    products:[],
    isLoading:false,
    isError:false,
    error:"",
}

export const incomereducer=(state=initalState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true,error:payload}
        case POST_PRODUCT_SUCCESS:
            return {...state,isLoading:false,products:[...state.products,payload]}
        // case GET_PRODUCT_SUCCESS:
        //     return {...state,isLoading:false,products:payload}
        // case PATCH_PRODUCT_SUCCESS:
        //     return {...state,isLoading:false}
        // case DELETE_PRODUCT_SUCCESS:
                
        //         const updatedProducts = state.products.filter(
        //           (product) => product.id !== payload
        //         );
        //         return {
        //           ...state,
        //           products: updatedProducts,
        //           error: null,
        //         };
        default:
            return state
    }
}