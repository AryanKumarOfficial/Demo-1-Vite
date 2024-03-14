import { Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href={`/`}>
            <h1>React Router</h1>
          </a>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
            <a href="users">Users</a>
          </li>
        </ul>
        <div className="action">
          <a href="login">Login</a>
          <a href={`profile`}>Profile</a>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
