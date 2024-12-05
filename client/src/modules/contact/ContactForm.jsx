import React from "react";
import styled from "styled-components";

export const ContactForm = () => {
  const [selectedInterests, setSelectedInterests] = React.useState([]);
  const [selectedBudget, setSelectedBudget] = React.useState(null);

  const handleSelectInterest = (option) => {
    setSelectedInterests((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSelectBudget = (option) => {
    setSelectedBudget(option === selectedBudget ? null : option);
  };

  return (
    <StyledWrapper>
      <div className="contact-form">
        <h2>Have Great Idea?</h2>
        <p className="mb-[36px] sm:mb-[90px]">Tell us about it.</p>
        <form action="">
          <div className="content">
            <div className="top-info">
              <div className="contact-item">
                <label htmlFor="name">Name & Company</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="contact-item">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.mail@gmail.com"
                />
              </div>
              <div className="contact-item">
                <label>Your Interests</label>
                <div className="interests">
                  {[
                    "Web Development",
                    "Branding",
                    "UX/UI Design",
                    "App Development",
                  ].map((interest) => (
                    <StyledButton
                      key={interest}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelectInterest(interest);
                      }}
                      selected={selectedInterests.includes(interest)}
                    >
                      {interest}
                    </StyledButton>
                  ))}
                </div>
              </div>
              <div className="contact-item">
                <label>Project Budget (USD)</label>
                <div className="budget">
                  {[
                    "$100-$300",
                    "$5k-$10k",
                    "$10k-$20k",
                    "$20k-$40k",
                    "$50k+",
                  ].map((budget) => (
                    <StyledButton
                      key={budget}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelectBudget(budget);
                      }}
                      selected={selectedBudget === budget}
                    >
                      {budget}
                    </StyledButton>
                  ))}
                </div>
              </div>
            </div>
            <div className="bottom-info mt-[44px]">
              <div className="contact-item">
                <label htmlFor="message">Tell Us More About Your Project</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Something about your great idea"
                ></textarea>
              </div>
            </div>
            <SubmitButton className="flex items-center justify-center">
              <button className="full-rounded">
                <span>Submit The Request</span>
                <div className="border full-rounded" />
              </button>
            </SubmitButton>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  .contact-form {
    color: var(--white);
    padding: 110px 100px;
  }
  .contact-form h2 {
    font-weight: 600;
    font-size: 90px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }
  .contact-form p {
    font-weight: 500;
    font-size: 38px;
    text-transform: uppercase;
    text-align: center;
  }
  .contact-form .top-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 26px;
    grid-row-gap: 44px;
  }
  .contact-form .contact-item {
    display: flex;
    flex-direction: column;
  }
  .contact-form .contact-item label {
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 22px;
  }
  .contact-form .contact-item input,
  .contact-form .contact-item textarea {
    background: transparent;
    border: none;
    border-bottom: 3px solid #727272;
    margin-bottom: 44px;
    outline: none;
    padding: 12px 0;
  }
  .contact-form .contact-item input::placeholder,
  .contact-form .contact-item textarea::placeholder {
    font-weight: 500;
    font-size: 20px;
    color: #727272;
  }
  .contact-item .interests,
  .contact-item .budget {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  @media (max-width: 1024px) {
    .contact-form .top-info {
      display: flex;
      flex-direction: column;
      gap: 44px;
    }
    .contact-form .contact-item input,
    .contact-form .contact-item textarea {
      margin-bottom: 0;
    }
    .contact-form .bottom-info {
      margin-bottom: 44px;
    }
    .contact-form .contact-item input::placeholder,
    .contact-form .contact-item textarea::placeholder {
      font-size: 14px;
    }
  }
  @media (max-width: 640px) {
    .contact-form {
      color: var(--white);
      padding: 0;
    }
    .contact-form h2 {
      font-size: 26px;
      margin-bottom: 8px;
    }
    .contact-form p {
      font-weight: 500;
      font-size: 14px;
    }
    .contact-form .contact-item label {
      font-size: 16px;
      margin-bottom: 16px;
    }
    .contact-form .top-info {
      gap: 28px;
    }
    .contact-form .contact-item input,
    .contact-form .contact-item textarea {
      padding: 4px 0;
    }
    .contact-form .bottom-info {
      margin: 28px 0;
    }
  }
`;

const StyledButton = styled.button`
  padding: 10px 25px;
  border: 2.6px solid ${(props) => (props.selected ? "#fff" : "#727272")};
  background-color: ${(props) => (props.selected ? "#fff" : "transparent")};
  color: ${(props) => (props.selected ? "#000" : "#727272")};
  border-radius: 40px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#fff" : "#333")};
    color: ${(props) => (props.selected ? "#000" : "#fff")};
  }

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 8px 18px;
  }
`;

const SubmitButton = styled.div`
  button {
    position: relative;
    margin: auto;
    padding: 1em 2.5em 1em 2.5em;
    border: none;
    background: #fff;
    transition: all 0.1s linear;
    box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
  }

  button:active {
    transform: scale(0.95);
  }

  button span {
    font-weight: 500;
    color: #000;
    font-size: 18px;
  }

  button .border {
    position: absolute;
    border: 0.15em solid #fff;
    transition: all 0.3s 0.08s linear;
    top: 50%;
    left: 50%;
    width: 13em;
    height: 3.6em;
    transform: translate(-50%, -50%);
  }

  button:hover .border {
    display: block;
    width: 256px;
    height: 74px;
  }

  .full-rounded {
    border-radius: 3em;
  }
  @media (max-width: 640px) {
    button {
      padding: 1em 2.5em 1em 2.5em;
    }
    button span {
      font-size: 16px;
    }
  }
`;
