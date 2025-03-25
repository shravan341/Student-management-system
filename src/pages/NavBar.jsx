import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <ul className="flex justify-center gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mywork"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
