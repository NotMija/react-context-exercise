import React from "react";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            Inicio
          </Link>

          <div >
            <Link to="/">
              Home
            </Link>
            <Link to="/List">
              Beer List
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
