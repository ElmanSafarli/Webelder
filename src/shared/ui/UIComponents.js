import React from "react";

export const SectionLabel = ({ text }) => (
  <div className="section-name absolute left-0 top-0 sm:top-[150px] sm:translate-y-[150px] translate-y-0 py-[15px] px-[25px] sm:rotate-[-90deg] rotate-0 bg-[#191919] font-medium text-[#808383] uppercase transform origin-top-left">
    {text}
  </div>
);
