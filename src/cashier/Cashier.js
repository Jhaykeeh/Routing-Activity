import React from "react";
import CustomerList from "./CustomerList";

const Cashier = ({ cashier }) => (
  <div className="cashier-item">
    <h4>
      {cashier.type === "priority" ? "Priority Cashier" : "Regular Cashier"} #{cashier.id}
    </h4>
    {cashier.current ? (
      <p className="cashier-status active">
        Now serving: Customer #{cashier.current.id} ({cashier.current.serviceTime}s remaining)
      </p>
    ) : (
      <p className="cashier-status idle">Idle Cashier</p>
    )}
    <CustomerList customers={cashier.queue} title="Queue" />
  </div>
);

export default Cashier;
