import React, { createContext, useReducer, useEffect } from "react";
import CashierQueueReducer, { initialState } from "./CashierQueueReducer";

export const CashierQueueContext = createContext();

export const CashierQueueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CashierQueueReducer, initialState);

 
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CashierQueueContext.Provider value={{ state, dispatch }}>
      {children}
    </CashierQueueContext.Provider>
  );
};
