import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold underline"
      : "text-black hover:text-gray-300";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <NavLink to="" className={linkClass}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="users" className={linkClass}>
          Users
        </NavLink>{" "}
        |{" "}
        <NavLink to="profile" className={linkClass}>
          Profile
        </NavLink>{" "}
        |{" "}
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
