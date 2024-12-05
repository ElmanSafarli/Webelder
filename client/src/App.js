import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navigate } from "./modules";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigate />
      </BrowserRouter>
    </div>
  );
}

export default App;
