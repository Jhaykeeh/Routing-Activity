import React, { useContext } from "react";
import { CashierQueueContext } from "./CashierQueueContext";
import Cashier from "./Cashier";

const CashierPanel = () => {
  const { state } = useContext(CashierQueueContext);

  return (
    <div className="cashier-card">
      <h2>Cashiers</h2>
      {state.cashiers.map(c => (
        <Cashier key={c.id} cashier={c} />
      ))}
    </div>
  );
};

export default CashierPanel;
