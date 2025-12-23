import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold underline"
      : "text-black hover:text-gray-300";
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <nav>
        <NavLink to="users" className={linkClass}>Users</NavLink>
        <NavLink to="profile" className={linkClass}>Profile</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
