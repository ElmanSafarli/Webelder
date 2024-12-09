// Navigate.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import { Home, Services } from "../../pages";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Navigate;
