import React from "react";

const CustomerList = ({ customers, title }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {customers.map(c => (
        <li key={c.id} style={{ color: c.type === "priority" ? "red" : "blue" }}>
          Customer #{c.id} ({c.serviceTime}s)
        </li>
      ))}
    </ul>
  </div>
);

export default CustomerList;
