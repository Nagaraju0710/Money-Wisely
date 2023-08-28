import React, { useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Heading } from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";


export const Expenses = () => {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "20px",
        backgroundColor: "#d2cf72",
        width: "90%",
        margin: "auto",
        borderRadius: "20px"
      }}
    >
      <Container maxW={"5xl"}>
        <DIV>
          <Heading as={"h3"} textAlign={"center"} size={"lg"} margin={"10px"}>
            ADD EXPENSES
          </Heading>
          <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
              <label htmlFor="">Title:</label>
              <input
                type="text"
                value={title}
                name={"title"}
                placeholder=" Title"
                onChange={handleInput("title")}
              />
            </div>
            <div className="input-control">
              <label htmlFor="">Amount:</label>
              <input
                value={amount}
                type="text"
                name={"amount"}
                placeholder={" Amount"}
                onChange={handleInput("amount")}
              />
            </div>
            <div className="input-control">
              <label htmlFor="">Date:</label>
              <div className="date-pick">
                <input
                  id="date"
                  type="date"
                  placeholderText="Enter A Date"
                  selected={date}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => {
                    setInputState({ ...inputState, date: date });
                  }}
                />
              </div>
            </div>
            <div className="input-control">
              <label htmlFor="">Category:</label>
              <div className="selects input-control">
                <select
                  required
                  value={category}
                  name="category"
                  id="category"
                  onChange={handleInput("category")}
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="education">Education</option>
                  <option value="groceries">Groceries</option>
                  <option value="health">Health</option>
                  <option value="subscriptions">Subscriptions</option>
                  <option value="takeaways">Takeaways</option>
                  <option value="clothing">Clothing</option>
                  <option value="travelling">Travelling</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="input-control">
              <label htmlFor="">Remark:</label>
              <textarea
                name="description"
                value={description}
                placeholder="Add A Reference"
                id="description"
                rows="2"
                onChange={handleInput("description")}
              ></textarea>
            </div>
            <div className="submit-btn">
              <button className="button">
                <div>
                  {<MinusIcon className="icon" color={"red"} />} Withdraw
                </div>
              </button>
            </div>
          </FormStyled>
        </DIV>
      </Container>
    </div>
  );
};

const DIV = styled.div`
  margin-top: 50px;
  background-color: #d2cf72;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 30px 50px;
  border-radius: 30px;
  box-shadow: rgb(56, 138, 201) 0px 1px 2px 0px,
    rgb(126, 176, 214) 0px 2px 6px 2px;
  width: 90%;
  margin: auto;
  text-align: center;
  background-color: #eeeeee;
  color: black;
  margin-top: 5px;
  margin-bottom: 15px;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid black;
    background: white;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    margin: auto;
    width: 100%;
    text-align: left;
    input {
      width: 90%;
      display: block;
    }
  }
  textarea {
    width: 90%;
    display: block;
  }
  .selects {
    select {
      color: rgba(34, 34, 96, 0.4);
      width: 90%;
      display: block;
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  
    textarea {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }
    .selects {
      display: flex;
      justify-content: flex-start;
    }
    .date-pick {
      display: flex;
      justify-content: flex-start;
      width: 90%;
    }

    .button {
      display: inline-block;
      padding: 12px 24px;
      width: 30%;
      border: 1px solid #e64158;
      border-radius: 50px;
      transition: all 0.2s ease-in;
      position: relative;
      overflow: hidden;
      font-size: 19px;
      color: black;
      z-index: 1;
    }
    .button div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
    .button:before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scaleY(1) scaleX(1.25);
      top: 100%;
      width: 140%;
      height: 180%;
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 50%;
      display: block;
      transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -1;
    }

    .button:hover {
      color: #ffffff;
      border: 1px solid #39bda7;
    }

    .button:hover:before {
      top: -35%;
      background-color: #39bda7;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    .button:hover:after {
      top: -45%;
      background-color: #39bda7;
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }
    @media screen and (max-width: 900px) {
      width: 90%;
      .button {
        width: 80%;
      }
      .button:before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleY(1) scaleX(1.25);
        top: 100%;
        width: 140%;
        height: 180%;
        background-color: #ba0722;
        border-radius: 50%;
        display: block;
        transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
      }
      .button:after {
        content: "";
        position: absolute;
        left: 55%;
        transform: translateX(-50%) scaleY(1) scaleX(1.45);
        top: 180%;
        width: 160%;
        height: 190%;
        background-color: #ba0722;
        border-radius: 50%;
        display: block;
        transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
        z-index: -1;
      }
      .button:hover .icon {
        color: white;
      }
      .button:hover {
        color: #ffffff;
        border: 1px solid #39bda7;
      }

      .button:hover:before {
        top: -35%;
        background-color: #ba0722;
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }

      .button:hover:after {
        top: -45%;
        background-color: #ba0722;
        transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      }
      @media screen and (max-width: 900px) {
        width: 100%;
        .button {
          width: 80%;
        }
      }
    }
`;
