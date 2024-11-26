import React from "react";
import styled from "styled-components";

// Components
import { Expertise, FAQSection, Testimonials } from "../../widgets";
import { ContactForm } from "../../modules";

const Services = () => {
  return (
    <>
      <StyledWrapper>
        <Testimonials />
        <FAQSection />
        <Expertise />
        <ContactForm />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  padding: 0 42px;

  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

export default Services;
