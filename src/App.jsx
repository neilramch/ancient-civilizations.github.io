import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Civilization from "./pages/Civilization";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const civilizationEras = {
    "Bronze Age - Early Civilizations (c. 3500 BCE – c. 1200 BCE)": [
      "Sumer",
      "IndusValley",
      "Egypt",
      "Akkad", 
      "Babylonia",
      "Hittites",
    ],
    "Iron Age - Classical Civilizations (c. 1200 BCE – c. 500 CE)": [
      "Greece",
      "Rome",
      "Persia",
      "China",
      "VedicIndia",
    ],
    "Later Civilizations (c. 500 CE – c. 1500 CE)": [
      "Carthage",
      "Teotihuacan",
      "Olmecs",
      "Mayans",
      "Toltecs",
      "Japan",
    ],
  };

  const formatCivilizationName = (name) => {
    return name.replace(/([A-Z])/g, " $1").trim(); // Inserts space before uppercase letters
  };

  return (
    <Router basename="/">
      <header className="header">
        <div className="header-text-container">
          <img src="/rockpeople.png" alt="Logo" />
          <div className="header-text">
            <h1>Histopedia</h1>
            <h3>A GUIDE TO ANTIQUITY</h3>
          </div>
        </div>
        <nav className="dropdown-menu">
          <button className="menu-button">Explore Civilizations</button>
          <div className="dropdown">
            {Object.entries(civilizationEras).map(([era, civilizations]) => (
              <div key={era} className="dropdown-item">
                <span>{era}</span>
                <div className="sub-menu">
                  {civilizations.map((civilization) => (
                    <NavLink to={`/${civilization}`} key={civilization} className="sub-menu-item">
                      {formatCivilizationName(civilization)}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:civilizationName" element={<Civilization />} />
      </Routes>
    </Router>
  );
};
export default App;
