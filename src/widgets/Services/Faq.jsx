import React, { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: "What are your focus areas as a UI/UX agency?",
      answer:
        "Sure, when it comes to UI/UX, our agency prioritizes user-centric design, ensuring seamless and intuitive interactions...",
    },
    {
      question: "Why is UI/UX design important for your business growth?",
      answer:
        "UI/UX design is essential for improving customer satisfaction and driving engagement...",
    },
    {
      question: "Can your UX design agency help us with web design?",
      answer:
        "Absolutely! We specialize in both UX and web design to ensure a cohesive digital experience...",
    },
    {
      question:
        "What separates your agency from other top UI/UX design agencies?",
      answer:
        "We offer tailored solutions with extensive user research to design experiences that resonate...",
    },
    {
      question: "What process should I expect from your UX agency?",
      answer:
        "Our process includes research, prototyping, user testing, and final implementation...",
    },
    {
      question: "How much does a UI/UX design project cost?",
      answer:
        "The cost depends on the project scope and complexity. Contact us for a custom quote...",
    },
    {
      question: "What type of branding solution do you offer?",
      answer:
        "We provide comprehensive branding services, including logo design, brand guidelines, and more...",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <FAQWrapper>
      <h2>
        Frequently <br /> Asked Questions
      </h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openQuestion === index ? "open" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-question">
              <p>{faq.question}</p>
              <div
                className={`arrow-icon ${openQuestion === index ? "open" : ""}`}
              >
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`arrow ${openQuestion === index ? "open" : ""}`}
                >
                  <path
                    d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 2V1H7V2H9Z"
                    fill={` ${
                      openQuestion === index ? "var(--white)" : "var(--black)"
                    }`}
                  />
                </svg>
              </div>
            </div>
            <div
              className={`faq-answer-container ${
                openQuestion === index ? "open" : ""
              }`}
            >
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </FAQWrapper>
  );
};

export default FAQSection;

// Styled Components
const FAQWrapper = styled.div`
  color: var(--white);
  margin-top: 130px;

  h2 {
    text-align: center;
    margin-bottom: 80px;
    font-size: 60px;
    font-weight: 600;
  }

  .faq-list {
    max-width: 920px;
    margin: 0 auto;
  }

  .faq-item {
    border-bottom: 2px solid #727272;
    padding: 24px 0;
    cursor: pointer;
  }

  .arrow-icon {
    background-color: var(--white);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &.open {
      background-color: #727272;
    }
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
  }

  .faq-answer-container {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
  }

  .faq-answer-container.open {
    max-height: 150px;
    opacity: 1;
  }

  .faq-answer {
    margin-top: 20px;
    font-size: 18px;
    color: #727272;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    .faq-question p {
      font-size: 20px;
    }
  }

  @media (max-width: 640px) {
    margin-top: 50px;
    h2 {
      margin-bottom: 20px;
      font-size: 26px;
    }
    .arrow-icon {
      width: 30px;
      height: 30px;
    }
    .arrow-icon svg {
      width: 12px;
    }
    .faq-question p {
      font-size: 16px;
      width: 202px;
      font-weight: 400;
    }
    .faq-answer {
      font-size: 14px;
    }
  }
`;
