import React, {useReducer} from 'react';
import { styled } from 'styled-components';
import { Profile } from './Profile';
import { Income } from './Income';
import { Expenses } from './Expenses';
import { Analysis } from './Analysis';

const initialState = {
  isProfile: true,
  isIncome: false,
  isExpenses: false,
  isAnalysis: false,
};

const reducer = (state, {type, payload}) => {
  switch(type) {
    case "PROFILE":
      return {
        isProfile: true,
        isIncome: false,
        isExpenses: false,
        isAnalysis: false,
      }
    case "INCOME":
      return {
        isProfile: false,
        isIncome: true,
        isExpenses: false,
        isAnalysis: false,
      }
    case "EXPENSES":
      return {
        isProfile: false,
        isIncome: false,
        isExpenses: true,
        isAnalysis: false,
      }
    case "ANALYSIS":
      return {
        isProfile: false,
        isIncome: false,
        isExpenses: false,
        isAnalysis: true,
      }
    default:
      return state;
  }
};

export const SideBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SIDE>
      <div className='side-container'>

        <div className='image-container'>
          <img className='image' src='https://placehold.co/400' alt="" />
          <div className='details'>
            <h1>Name: Ranjeet Gupta</h1>
            <p>Email: ranjeetgupta114@gmail.com</p>
          </div>
        </div>

        <div className='btn-box'>
          <button 
          className='btn'
          onClick={() => dispatch({type:"PROFILE"})}
          >Profile
          </button>

          <button 
          className='btn'
          onClick={() => dispatch({type:"INCOME"})}
          >Income
          </button>

          <button 
          className='btn'
          onClick={() => dispatch({type:"EXPENSES"})}
          >Expenses
          </button>

          <button 
          className='btn'
          onClick={() => dispatch({type:"ANALYSIS"})}
          >Analysis
          </button>
        </div>
      </div>

      <div className='component-container'>
            {state.isProfile && <Profile />}
            {state.isIncome && <Income />}
            {state.isExpenses && <Expenses />}
            {state.isAnalysis && <Analysis />}
        </div>
    </SIDE>
  )
}

const SIDE = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;


  .side-container {
    width: 30%;
    height: 100vh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
   
  }

  .image-container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .image {
    width: 50%;
    border-radius: 50%;
  }

  .image-container div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .btn-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
   
  }

  .btn {
    background-color: blue;
    width: 150px;
    height: 50px;
    color: white;
    border-radius: 10px;
  }

  .component-container {
    width: 75%;
  }

`;
