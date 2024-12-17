import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="service" className="relative">
      <div className="section-name absolute left-0 top-0 sm:top-[150px] sm:translate-y-[150px] translate-y-0 py-[15px] px-[25px] sm:-rotate-90 bg-[#191919] font-medium text-[#808383] uppercase origin-top-left">
        Services
      </div>

      <div className="service-content py-[94px] relative z-10">
        <div className="top mx-4 sm:mx-24 md:flex items-center justify-between">
          <h1 className="transition-all">We offer several services for you</h1>
          <div className="flex flex-col mt-[24px] md:mt-0">
            <p className="transition-all">
              The best service we offer to you and we are ready to realize the
              ideas you give us as best as possible.
            </p>
            <Link
              href="/"
              className="flex items-center justify-center w-full sm:w-[210px] h-[50px] mt-[26px] border-2 border-white rounded-[25px] text-white bg-transparent hover:bg-white hover:text-black transition-all"
            >
              Explore our Services
            </Link>
          </div>
        </div>

        <div className="services-items md:flex justify-between items-center mt-[30px] sm:mt-[50px] md:mt-0">
          <div className="service-left w-full">
            <div className="service-name service-development mb-8">
              <div className="content">
                <span>01</span>
                <h2>Development</h2>
                <p>
                  Our skilled full stack development team is prepared to blend
                  elegant design with cutting-edge code, utilizing the latest
                  frameworks and technologies.
                </p>
              </div>
            </div>
            <div className="service-name service-design">
              <div className="content">
                <span>02</span>
                <h2>Design</h2>
                <p>
                  Get a unique and high-quality UI and UX Design solution for
                  website interfaces and mobile applications.
                </p>
              </div>
            </div>
          </div>

          <div className="service-right md:mr-24 hidden sm:flex items-center justify-center">
            <div className="main flex items-center justify-center">
              <div className="back">
                <div className="circles flex gap-1 pl-[24px] pt-[12px]">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="bg">
                <img src="" alt="Service Preview" />
                <Link
                  to="#"
                  className="w-[84px] h-[84px] sm:w-[108px] sm:h-[108px] flex items-center justify-center border-2 border-white bg-[#111111] hover:bg-black transition-all rounded-full"
                >
                  <svg
                    width="30"
                    height="34"
                    viewBox="0 0 30 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.438262 30.7506C-0.251757 31.6131 -0.111914 32.8717 0.75061 33.5617C1.61313 34.2518 2.87172 34.1119 3.56174 33.2494L0.438262 30.7506ZM27.9878 1.77913C27.8658 0.681321 26.877 -0.109749 25.7791 0.0122295L7.88923 2C6.79142 2.12198 6.00034 3.11082 6.12232 4.20863C6.2443 5.30644 7.23314 6.09751 8.33096 5.97553L24.2331 4.20863L26 20.1108C26.122 21.2086 27.1108 21.9997 28.2086 21.8777C29.3064 21.7557 30.0975 20.7669 29.9755 19.669L27.9878 1.77913ZM3.56174 33.2494L27.5617 3.24939L24.4383 0.750608L0.438262 30.7506L3.56174 33.2494Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
