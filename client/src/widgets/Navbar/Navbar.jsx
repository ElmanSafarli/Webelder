import React from "react";

import { Link } from "react-router-dom";

// Components
// import { LightLogo, DarkLogo } from "../../shared/ui/Logo";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-start justify-between m-[26px]">
        <div className="nav-log"></div>
        <div className="nav-items hidden md:block">
          <ul className="flex items-center justify-center rounded-full bg-zinc-800">
            <li>
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#project">Project</Link>
            </li>
            <li>
              <Link to="#blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="nav-btn hidden md:block">
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="nav-sidebar block md:hidden"></div>
      </nav>
    </>
  );
};

export default Navbar;
