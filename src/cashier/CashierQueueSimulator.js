import React, { useContext } from "react";
import { CashierQueueContext, CashierQueueProvider } from "./CashierQueueContext";
import CustomerList from "./CustomerList";
import CashierPanel from "./CashierPanel";
import "./CashierQueue.css";

const Controls = () => {
  const { dispatch, state } = useContext(CashierQueueContext);

  return (
    <div className="control-card">
      <h2>Cashier Queue</h2>
      <div className="control-buttons">
        <button onClick={() => dispatch({ type: "ADD_CUSTOMER" })}>Add Customer</button>
        <button onClick={() => dispatch({ type: "ASSIGN_CUSTOMER" })}>Assign Customer</button>
        <button onClick={() => dispatch({ type: "ASSIGN_ALL" })}>Assign All Customers</button>
      </div>
      <CustomerList customers={state.waitingQueue} title="Waiting Queue" />
    </div>
  );
};

const CashierQueueSimulator = () => (
  <CashierQueueProvider>
    <div className="cashier-simulator">
      <Controls />
      <CashierPanel />
    </div>
  </CashierQueueProvider>
);

export default CashierQueueSimulator;
