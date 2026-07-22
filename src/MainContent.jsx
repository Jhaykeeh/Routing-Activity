import { Routes, Route } from "react-router-dom";
import App from "./App";
import CashierQueueSimulator from "./cashier/CashierQueueSimulator";
import TodoPage from "./ToDo/TodoPage";
import EcommerceApp from "./ecommerce/EcommerceApp";

export default function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        
        <Route path="/" element={<App />} />

        
        <Route
          path="/cashier"
          element={<CashierQueueSimulator />}
        />

        <Route
          path="/todo"
          element={< TodoPage/>}
        />

        <Route
          path="/ecommerce/*"
          element={<EcommerceApp />}
        />

        {/* Logout */}
        <Route
          path="/logout"
          element={<h2>Logout Page</h2>}
        />
      </Routes>
    </div>
  );
}