import React, { useState } from "react";
import styled from "styled-components";

import { TestimonialStar, BtnSupport } from "../../shared";
import { clientData } from "./Data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientData.length - 1 : prevIndex - 1
    );
  };

  return (
    <TestimonialsWrapper>
      <h2>
        Look at what our <br /> Clients Say:
      </h2>
      <p>
        Automate your workflow to increase productivity and regain control of
        your time
      </p>
      <div className="content">
        <div className="left">
          <div className="flex items-center gap-[18px]">
            <h3>Testimonial </h3>
            <svg
              width="35"
              height="16"
              viewBox="0 0 35 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM34.7071 8.70711C35.0976 8.31658 35.0976 7.68342 34.7071 7.29289L28.3431 0.928932C27.9526 0.538408 27.3195 0.538408 26.9289 0.928932C26.5384 1.31946 26.5384 1.95262 26.9289 2.34315L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM1 9H34V7H1V9Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="navigation">
            <button onClick={handlePrev}>
              <BtnSupport />
            </button>
            <button onClick={handleNext}>
              <BtnSupport />
            </button>
          </div>
        </div>
        <div className="client-review">
          {clientData.map((item, index) => (
            <div
              key={item.id}
              className={`item ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <div className="client_img">
                <img src={item.image} alt={item.company} />
              </div>
              <div className="info">
                <div className="flex items-center gap-[6px] mb-[20px] sm:mb-[36px] justify-center sm:justify-start">
                  <div className="stars flex items-center gap-[4px]">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <TestimonialStar key={idx} />
                    ))}
                  </div>
                  <span className="text-[26px] font-medium">5.0</span>
                </div>
                <p>{item.quote}</p>
                <span>
                  {item.name}, {item.company}
                </span>
                <div className="navigation_mobile">
                  <button onClick={handlePrev}>
                    <BtnSupport />
                  </button>
                  <button onClick={handleNext}>
                    <BtnSupport />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TestimonialsWrapper>
  );
};

const TestimonialsWrapper = styled.div`
  color: var(--white);
  background-color: var(--dark_grey);
  padding: 92px 56px;
  border-radius: 22px;

  h2 {
    font-weight: 700;
    font-size: 3.75rem;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    color: #727272;
    max-width: 374px;
    margin: 0 auto 98px;
  }

  .content {
    position: relative;
    display: flex;

    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      h3 {
        font-weight: 500;
        font-size: 36px;
        text-transform: uppercase;
      }
    }

    .navigation_mobile {
      display: none;
      gap: 0.625rem;
      margin: 16px auto 0;

      button:first-child svg {
        rotate: 180deg;
      }
    }

    .navigation {
      display: flex;
      justify-content: center;
      gap: 0.625rem;
      margin-bottom: 1.25rem;

      button:first-child svg {
        rotate: 180deg;
      }

      button {
        width: 54px;
        height: 54px;
        background-color: transparent;
        border: 2px solid var(--medium-gray);
        border-radius: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s all;

        &:hover {
          background-color: var(--medium-gray);
        }
      }
    }

    .client-review {
      display: flex;
      overflow: hidden;
      width: 100%;
      height: 25rem;
      position: relative;

      .item {
        flex: 0 0 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
        padding: 1.5rem;
        transition: transform 0.5s ease-in-out;

        &.inactive {
          display: none;
        }
      }

      .client_img {
        overflow: hidden;
        position: relative;
        width: 15.313rem;
        height: 19.188rem;
        background: var(--load-gray);
        border-radius: 10px;
        margin-right: 1.5rem;

        img {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        &:hover img {
          transform: scale(1.1);
        }
      }

      .info {
        p {
          margin-bottom: 2.5rem;
          font-weight: 400;
          font-size: 1rem;
          color: var(--white);
          line-height: 1.5;
          text-align: left;
          max-width: 576px;
          height: 98px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }

        span {
          font-weight: 500;
          font-size: 1.25rem;
          color: var(--white);
        }

        .stars {
          display: flex;
          gap: 0.25rem;
        }

        .rating {
          font-size: 1.625rem;
          font-weight: 500;
          margin-left: 0.375rem;
        }
      }
    }
  }

  @media (max-width: 840px) {
    padding: 40px 16px;
    border-radius: 20px;

    h2 {
      font-size: 32px;
    }

    p {
      margin-bottom: 50px;
    }

    .content {
      display: block;

      .navigation {
        display: none;
      }

      .navigation_mobile {
        display: flex;
        order: 4;
      }

      .left {
        margin-bottom: 38px;

        h3 {
          font-size: 26px;
        }
      }

      .client-review {
        height: auto;

        .item {
          padding: 0;
          display: block;
        }

        .client_img {
          border-radius: 6px;
          max-width: 244px;
          height: 194px;
          margin: 0 auto 20px;
          width: 100%;
        }

        .info {
          text-align: center;
          display: flex;
          flex-direction: column;

          p {
            font-size: 14px;
            height: 170px;
            -webkit-line-clamp: 8;
            order: 3;
            margin-bottom: 0;
            margin-top: 16px;
            text-align: center;
          }

          span {
            font-size: 16px;
            oorder: 2;
          }

          .stars {
            svg {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
`;

export default Testimonials;
