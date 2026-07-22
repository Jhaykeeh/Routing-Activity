import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const linkClass = ({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link');

  return (
    <div className="sidebar">
      <h3>Navigation</h3>

      <NavLink to="/" className={linkClass}>Student Activity</NavLink>
      <NavLink to="/cashier" className={linkClass}>Cashier Queue Simulator</NavLink>
      <NavLink to="/todo" className={linkClass}>To do List</NavLink>
      <NavLink to="/ecommerce" className={linkClass}>Ecommerce</NavLink>
      <NavLink to="/logout" className={linkClass}>Logout</NavLink>
    </div>
  );
}