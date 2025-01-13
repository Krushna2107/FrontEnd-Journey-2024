import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  polls: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Global Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action to add poll
  function addPoll(poll) {
    dispatch({
      type: "ADD_POLL",
      payload: poll,
    });
  }

  return (
    <GlobalContext.Provider value={{ polls: state.polls, addPoll }}>
      {children}
    </GlobalContext.Provider>
  );
};
