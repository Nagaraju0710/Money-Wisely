import { authReducer } from "./Redux/authRedux/reducer";
// import store from "./Redux/store"
export type BudgetObject = {
    id: number;
    budgetcategory: string;
    duration: number;
    amount: number
}

export type WithdrawObject = {
    id: number;
    budgetcategory: string;
    Bank: string;
    account: number;
    withdraamount:number;
}

export type subscriptionObject = {
    id: number;
    subscriptioncategory: string;
    amount: number;
    phone:number;
}


export type UserObject = {
    fullname: string;
    age: number;
    email: string;
    password: string;
    id?: number;
    budget: BudgetObject[];
    withdraw: WithdrawObject[];
    subscription: subscriptionObject[];
}

export interface UserObjectNew {
    fullname: string;
    email: string;
    password: string;
    id?: number;
    budget: BudgetObject[];
    withdraw: WithdrawObject[];
    subscription: subscriptionObject[];
}

export type RootauthState = ReturnType<typeof authReducer>;



export { }