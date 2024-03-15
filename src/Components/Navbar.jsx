import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <NavLink
            className={(e) => {
              return e.isActive ? "text-red-500" : "";
            }}
            to={`/`}
          >
            <h1>React Router</h1>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-red-500" : "";
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-red-500" : "";
              }}
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => {
                return e.isActive ? "text-red-500" : "";
              }}
              to="contact"
            >
              Contact
            </NavLink>
          </li>
          {/* <li>
            <Link to="users">Users</Link>
          </li> */}
        </ul>
        <div className="action">
          <NavLink
            className={(e) => {
              return e.isActive ? "text-red-500" : "";
            }}
            to="login"
          >
            Login
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "text-red-500" : "";
            }}
            to={`profile`}
          >
            Profile
          </NavLink>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
