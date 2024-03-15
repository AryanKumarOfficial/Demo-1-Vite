import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { MdAccountCircle } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

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
      <div className="sidebar-btn">
        <button
          onClick={() => {
            document.querySelector(".sidebar").classList.toggle("active");
          }}
        >
          <HiOutlineMenuAlt1
            size={35}
            className="text-[#333] font-semibold left-1 absolute top-4"
          />
        </button>
      </div>
      <div className="sidebar">
        <div className="close-btn">
          <IoCloseSharp
            size={35}
            onClick={() => {
              document.querySelector(".sidebar").classList.toggle("active");
            }}
            className="text-black font-semibold absolute top-4"
          />
        </div>

        <div className="logo">
          <NavLink
            to="/"
            className={(e) => {
              return `${e.isActive ? "text-red-500" : ""} text-center `;
            }}
          >
            <h1 className="">React Router</h1>
          </NavLink>
        </div>

        <ul>
          <li>
            <NavLink
              to="/"
              className={(e) => {
                return `${e.isActive ? "text-red-500" : ""}`;
              }}
              exact="true"
              onClick={() =>
                document.querySelector(".sidebar").classList.toggle("active")
              }
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
              onClick={() =>
                document.querySelector(".sidebar").classList.toggle("active")
              }
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
              onClick={() =>
                document.querySelector(".sidebar").classList.toggle("active")
              }
            >
              Contact
            </NavLink>
          </li>
          {!authenticated && (
            <li>
              <NavLink
                to="/login"
                className={(e) => {
                  return `${e.isActive ? "text-red-500" : ""}`;
                }}
                onClick={() =>
                  document.querySelector(".sidebar").classList.toggle("active")
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {authenticated && (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className={(e) => {
                    return `${e.isActive ? "text-red-500" : ""}`;
                  }}
                  onClick={() =>
                    document
                      .querySelector(".sidebar")
                      .classList.toggle("active")
                  }
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
                  onClick={() =>
                    document
                      .querySelector(".sidebar")
                      .classList.toggle("active")
                  }
                >
                  Settings
                </NavLink>
              </li>
              <li>
                <button
                  // to="/logout"
                  className={`text-[#333] font-semibold`}
                  onClick={() => {
                    document
                      .querySelector(".sidebar")
                      .classList.toggle("active");
                    setAuthenticated(false);
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
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
            exact="true"
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
        {authenticated ? (
          <NavLink
            to="/login"
            className={(e) => {
              return `${e.isActive ? "text-red-500" : ""}`;
            }}
            // onClick={() => setAuthenticated(true)}
          >
            Login
          </NavLink>
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
