import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {reducer as authReducer} from "./authRedux/reducer"
import {reducer as budgetReducer} from "./BudgetRedux/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    authReducer,
    budgetReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))