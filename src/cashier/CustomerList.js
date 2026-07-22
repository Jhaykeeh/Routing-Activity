import React from "react";

const CustomerList = ({ customers, title }) => (
  <div>
    <h3>{title}</h3>
    <ul className="queue-list">
      {customers.map(c => (
        <li key={c.id} style={{ color: c.type === "priority" ? "#dc2626" : "#2563eb" }}>
          Customer #{c.id} ({c.serviceTime}s)
        </li>
      ))}
    </ul>
  </div>
);

export default CustomerList;
