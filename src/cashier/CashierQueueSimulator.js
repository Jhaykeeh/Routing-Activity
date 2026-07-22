import React, { useContext } from "react";
import { CashierQueueContext, CashierQueueProvider } from "./CashierQueueContext";
import CustomerList from "./CustomerList";
import CashierPanel from "./CashierPanel";


const Controls = () => {
  const { dispatch, state } = useContext(CashierQueueContext);

  return (
    <div>
      <h2>Cashier Queue</h2>
      <button onClick={() => dispatch({ type: "ADD_CUSTOMER" })}>Add Customer</button>
      <button onClick={() => dispatch({ type: "ASSIGN_CUSTOMER" })}>Assign Customer</button>
      <button onClick={() => dispatch({ type: "ASSIGN_ALL" })}>Assign All Customers</button>
      <CustomerList customers={state.waitingQueue} title="Waiting Queue" />
    </div>
  );
};

const CashierQueueSimulator = () => (
  <CashierQueueProvider>  
    <div style={{ display: "flex", gap: "2rem" }}>
      <Controls />
      <CashierPanel />
    </div>
  </CashierQueueProvider>
);

export default CashierQueueSimulator;
