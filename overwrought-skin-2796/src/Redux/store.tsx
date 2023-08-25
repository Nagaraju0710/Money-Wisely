import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { authReducer} from "./authRedux/reducer"
import {budgetReducer} from "./BudgetRedux/reducer"
import { subscriptionReducer } from "./subscriptionRedux/reducer";
// import {transactionReducer} from "./trasactionRedux/reducer";
import {withdrawReducer} from "./withdrawRedux/reducer"
import dataReducer from './AdminRedux/reducer';
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    // budgetReducer,
    authReducer,
    // subscriptionReducer,
    // withdrawReducer
    dataReducer
    
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
