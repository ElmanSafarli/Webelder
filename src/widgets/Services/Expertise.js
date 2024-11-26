import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <StyledWrapper>
      <div className="service-expertise">
        <span className="span hidden sm:block mb-[136px]">
          Find out how our team has tackled various IT challenges while helping
          startups across industries
        </span>
        <div className="content block sm:flex justify-between items-end">
          <p>DISCOVER OUR EXPERTISE THROUGH SUCCESSFUL CASE STUDIES</p>
          <span className="block sm:hidden span">
            Find out how our team has tackled various IT challenges while
            helping startups across industries
          </span>
          <>
            <Link to="">
              <span>Let’s work</span>
              <div className="arrow">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.324275 12.2628C-0.0828436 12.636 -0.110347 13.2686 0.262846 13.6757C0.636038 14.0828 1.26861 14.1103 1.67572 13.7372L0.324275 12.2628ZM13.9991 2.04344C14.023 1.49167 13.5952 1.02493 13.0434 1.00094L4.05193 0.61001C3.50017 0.58602 3.03343 1.01386 3.00944 1.56563C2.98545 2.11739 3.41329 2.58413 3.96506 2.60812L11.9575 2.95562L11.61 10.9481C11.586 11.4998 12.0139 11.9666 12.5656 11.9906C13.1174 12.0146 13.5841 11.5867 13.6081 11.0349L13.9991 2.04344ZM1.67572 13.7372L13.6757 2.73715L12.3243 1.26285L0.324275 12.2628L1.67572 13.7372Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .service-expertise {
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    background: linear-gradient(225deg, #d7caff 0%, #f1c8ff 100%);
    border-radius: 38px;
    padding: 44px 36px;
    transition: 0.3s all;
    margin-bottom: 64px;
    margin-top: 128px;
  }
  .service-expertise .content p {
    font-weight: 500;
    font-size: 54px;
    text-transform: uppercase;
    color: var(--black);
    max-width: 720px;
    transition: 0.3s all;
    width: 100%;
  }
  .service-expertise .span {
    font-weight: 400;
    font-size: 18px;
    transition: 0.3s all;
    color: var(--black);
    max-width: 398px;
    width: 100%;
  }
  .service-expertise a {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .service-expertise a span {
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--black);
    font-weight: 600;
    font-size: 16px;
    color: var(--white);
    width: 171px;
    height: 50px;
  }
  .service-expertise a .arrow {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all;
  }

  @media (max-width: 1024px) {
    .service-expertise .content p {
      font-size: 44px;
    }
  }
  @media (max-width: 640px) {
    .service-expertise .content p {
      font-size: 24px;
    }
    .service-expertise {
      border-radius: 25px;
      padding: 30px 20px;
      margin: 50px 0;
    }
    .service-expertise .span {
      font-size: 14px;
      margin: 24px 0;
    }
    .service-expertise a span {
      border-radius: 28px;
      font-size: 10px;
      width: 76px;
      height: 28px;
    }
    .service-expertise a .arrow {
      height: 28px;
      width: 28px;
      margin-left: 4px;
    }
    .service-expertise a .arrow svg {
      width: 10px;
    }
  }
`;

export default Expertise;
