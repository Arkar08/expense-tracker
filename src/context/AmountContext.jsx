/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext, useReducer } from "react";

export const AmountContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const expense = [{ transcation: "hello", amount: 100 }];
const initaialState = {
  expense,
};
// eslint-disable-next-line react-refresh/only-export-components
export const amountReducer = (state, action) => {
  switch (action.type) {
    case "Add Transcation":
      return {
        ...state,
        expense: action.payload,
      };
    case "Delete Transcation":
      return {
        ...state,
        expense: state.expense.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};
export const AmountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(amountReducer, initaialState);
  return (
    <AmountContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AmountContext.Provider>
  );
};
