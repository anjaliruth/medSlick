import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./components/Homepage";
import PricingPage from "./components/PricingPage";
import Login from "./components/Login";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          {!isAuthenticated && <Route path="/" element={<Homepage />} />}
          {isAuthenticated && <Route path="/" element={<Dashboard />} />}
          <Route path="pricing" element={<PricingPage />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
