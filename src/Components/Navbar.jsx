import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    window.onclick = (e) => {
      if (
        e.target.closest(".menu") === null &&
        e.target.closest("button") === null
      ) {
        closeDropdown();
      }
      // also when any link is clicked in menu to close the dropdown
      if (e.target.closest(".menu") !== null) {
        closeDropdown();
      }
    };
  }, []);

  return (
    <nav className="shadow-xl">
      <div className="logo">
        <NavLink
          to="/"
          className={(e) => {
            return `${e.isActive ? "text-red-500" : ""}`;
          }}
        >
          <h1>React Router</h1>
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(e) => {
              return `${e.isActive ? "text-red-500" : ""}`;
            }}
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(e) => {
              return `${e.isActive ? "text-red-500" : ""}`;
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(e) => {
              return `${e.isActive ? "text-red-500" : ""}`;
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="action">
        {!authenticated ? (
          <button
            // to="/login"
            className={(e) => {
              return `${e.isActive ? "text-red-500" : ""}`;
            }}
            onClick={() => setAuthenticated(true)}
          >
            Login
          </button>
        ) : (
          <button onClick={() => setShowDropdown(!showDropdown)}>
            <MdAccountCircle size={35} />
          </button>
        )}
        {showDropdown && (
          <div className="menu">
            <ul>
              <li>
                <NavLink
                  to="/profile"
                  className={(e) => {
                    return `${e.isActive ? "text-red-500" : ""}`;
                  }}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={(e) => {
                    return `${e.isActive ? "text-red-500" : ""}`;
                  }}
                >
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  // to="/logout"
                  className={`text-[#333] font-semibold`}
                  onClick={() => setAuthenticated(false)}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
