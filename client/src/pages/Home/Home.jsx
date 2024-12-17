import React from "react";

// Components
import { Navbar, Footer, HeaderHome, ServicesHome } from "../../widgets";
import { HomeCubs, HomeAboutCubs } from "../../shared/ui/Cubs";
import { SectionLabel } from "../../shared/ui/UIComponents";
import { ArrowButton } from "../../shared/ui/Buttons/ArrowButton";

const Home = () => {
  return (
    <>
      <header id="home" className="h-screen relative mx-4 sm:mx-10 block z-10">
        <Navbar />
        <HeaderHome />
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
      <ServicesHome />
      <Footer />
    </>
  );
};

export default Home;
