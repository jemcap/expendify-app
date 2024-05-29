import React, { useReducer, createContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Initial State - initialise the first set of data that will be rendered under Activity
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -12 },
    { id: 2, text: "Salary", amount: 650 },
    { id: 3, text: "Book", amount: -7 },
    { id: 4, text: "Digital Camera", amount: -450 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component - allow for all the components to access GlobalContext
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
