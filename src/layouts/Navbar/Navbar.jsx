import React from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../../routes/nav.routes";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="flex navbar w-1/3">
      {navRoutes.map((route) => (
        <li className="list-none mr-4" key={route.label}>
          <NavLink
            to={route.url}
            className="font-bold text-gray-700 navbar-link"
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </nav>
  );
};
