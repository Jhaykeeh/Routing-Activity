import React from "react";
import CustomerList from "./CustomerList";

const Cashier = ({ cashier }) => (
  <div style={{ border: "1px solid gray", padding: "1rem", marginBottom: "1rem" }}>
    <h4>
      {cashier.type === "priority" ? "Priority Cashier" : "Regular Cashier"} #{cashier.id}
    </h4>
    {cashier.current ? (
      <p>
        Now serving: Customer #{cashier.current.id} ({cashier.current.serviceTime}s remaining)
      </p>
    ) : (
      <p>Idle Cashier</p>
    )}
    <CustomerList customers={cashier.queue} title="Queue" />
  </div>
);

export default Cashier;
