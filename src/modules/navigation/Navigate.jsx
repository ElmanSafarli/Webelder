// Navigate.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Navigate;
