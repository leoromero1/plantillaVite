import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-white font-bold text-xl">
              Leo
            </NavLink>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block">
              <ul className="flex gap-3">
                <li>
                  <NavLink
                    to="/page1"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pag1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/page2"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pag2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/page3"
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Pag3
                  </NavLink>
                </li>
              </ul>
            </div>
            <button
              className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {showMenu ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm16 4H4v-2h16v2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`${showMenu ? "block" : "hidden"} sm:hidden mt-2`}>
          <NavLink
            to="/page1"
            className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Pag1
          </NavLink>
          <NavLink
            to="/page2"
            className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Pag2
          </NavLink>
          <NavLink
            to="/page3"
            className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Pag3
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
