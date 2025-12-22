import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>RouteCraft</h1>
      <nav>
        <NavLink
          to="/"
          className={
            ({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold underline" 
                : "text-black hover:text-gray-300" 
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={
            ({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold underline" 
                : "text-black hover:text-gray-300" 
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/dashboard"
          className={
            ({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold underline" 
                : "text-black hover:text-gray-300" 
          }
        >
          Dashboard
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
