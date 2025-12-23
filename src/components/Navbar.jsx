import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold underline"
      : "text-black hover:text-gray-300";

  return (
    <div>
      <h1>RouteCraft</h1>
      <nav>
        <NavLink
          to="/"
          className={linkClass}
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={linkClass}
        >
          Login
        </NavLink>
        <NavLink
          to="/dashboard"
          className={linkClass}
        >
          Dashboard
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
