import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LandingPage from "./LandingPage";
import AccountProduct from "./AccountProduct";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<AccountProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
