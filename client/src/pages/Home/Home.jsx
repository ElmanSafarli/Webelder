import React from "react";

// Components
import Navbar from "../../widgets/Navbar/Navbar";
import Footer from "../../widgets/Footer/Footer";
import { HomeCubs, HomeAboutCubs } from "../../shared/ui/Cubs";
import { SectionLabel } from "../../shared/ui/UIComponents";
import { ArrowButton } from "../../shared/ui/Buttons/ArrowButton";

const Home = () => {
  return (
    <>
      <header id="home" className="h-screen relative mx-4 sm:mx-10 block z-10">
        <Navbar />
        <div className="header-content">
          <div className="header-info">
            <h1 className="text-white text-left md:text-center">
              Experience the excellence of our agency services
            </h1>
            <p>
              We are a digital agency dedicated to creating and growing
              innovative digital solutions for startups and industry leaders.
            </p>
            <a
              href="#about"
              className="sm:flex hidden items-center justify-center"
            >
              <div className="arrow flex items-center justify-center rounded-full">
                <svg
                  width="16"
                  height="32"
                  viewBox="0 0 16 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 31.7071C7.68342 32.0976 8.31658 32.0976 8.70711 31.7071L15.0711 25.3431C15.4616 24.9526 15.4616 24.3195 15.0711 23.9289C14.6805 23.5384 14.0474 23.5384 13.6569 23.9289L8 29.5858L2.34315 23.9289C1.95262 23.5384 1.31946 23.5384 0.928932 23.9289C0.538408 24.3195 0.538408 24.9526 0.928932 25.3431L7.29289 31.7071ZM7 1L7 31H9L9 1L7 1Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <div className="mobile-header sm:hidden flex items-center justify-start">
              <a
                href="#service"
                className="text-center text-black bg-white flex items-center justify-center w-[130px] h-[36px] rounded-[18px] text-[16px] font-[600] text-[11px] font-semibold"
              >
                Our services
              </a>
              <a
                href="#about"
                className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#3C3C3C] ml-2"
              >
                <svg
                  width="10"
                  height="13"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.6 1C5.6 0.668629 5.33137 0.4 5 0.4C4.66863 0.4 4.4 0.668629 4.4 1H5.6ZM4.57574 12.4243C4.81005 12.6586 5.18995 12.6586 5.42426 12.4243L9.24264 8.60589C9.47696 8.37157 9.47696 7.99167 9.24264 7.75736C9.00833 7.52304 8.62843 7.52304 8.39411 7.75736L5 11.1515L1.60589 7.75736C1.37157 7.52304 0.991674 7.52304 0.757359 7.75736C0.523045 7.99167 0.523045 8.37157 0.757359 8.60589L4.57574 12.4243ZM4.4 1L4.4 12H5.6L5.6 1H4.4Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <HomeCubs />
      <section id="about" className="relative">
        <SectionLabel text="About us" />
        <HomeAboutCubs />
        <div className="about-content py-[94px] z-10 block relative mx-4 sm:mx-24">
          <h1>
            Delivering exceptional services through{" "}
            <span>pioneering ideas</span> that stand out from the rest
          </h1>
          <hr className="rounded-[1px] h-[2px] bg-[#808383] my-[24px] sm:my-[48px]" />
          <div className="md:flex block items-center justify-between">
            <p>
              Our expert team includes web developers, UI/UX designers, and
              other innovative professionals dedicated to crafting exceptional
              digital experiences.
            </p>
            <ArrowButton text="Know more" link="https://example.com/about" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
