import React from "react";
import { Link } from "react-router-dom";

// Arrow Icon Component
const ArrowIcon = ({ width = 16, height = 32, color = "white" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 31.7071C7.68342 32.0976 8.31658 32.0976 8.70711 31.7071L15.0711 25.3431C15.4616 24.9526 15.4616 24.3195 15.0711 23.9289C14.6805 23.5384 14.0474 23.5384 13.6569 23.9289L8 29.5858L2.34315 23.9289C1.95262 23.5384 1.31946 23.5384 0.928932 23.9289C0.538408 24.3195 0.538408 24.9526 0.928932 25.3431L7.29289 31.7071ZM7 1L7 31H9L9 1L7 1Z"
      fill={color}
    />
  </svg>
);

const HeaderHome = () => {
  return (
    <div className="header-content">
      <div className="header-info">
        <h1 className="text-white text-left md:text-center">
          Experience the excellence of our agency services
        </h1>
        <p className="text-gray-300">
          We are a digital agency dedicated to creating and growing innovative
          digital solutions for startups and industry leaders.
        </p>

        <Link
          to="#about"
          className="sm:flex hidden items-center justify-center"
          aria-label="Scroll to About Section"
        >
          <div className="arrow flex items-center justify-center rounded-full">
            <ArrowIcon />
          </div>
        </Link>

        <div className="mobile-header sm:hidden flex items-center justify-start">
          <Link
            to="#service"
            className="text-black bg-white flex items-center justify-center w-[130px] h-[36px] rounded-[18px] text-[11px] font-semibold"
          >
            Our Services
          </Link>
          <Link
            to="#about"
            className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-gray-700 ml-2"
            aria-label="Scroll to About Section"
          >
            <ArrowIcon width={10} height={13} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
