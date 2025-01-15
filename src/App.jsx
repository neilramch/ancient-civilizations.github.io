import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Civilization from "./pages/Civilization";
import Region from "./pages/wars/Region"; // Import the Region component
import "./App.css";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Civilization Data
  const civilizationEras = {
    "Bronze Age - Early Civilizations (c. 3500 BCE – c. 1200 BCE)": [
      "Sumer",
      "IndusValley",
      "Egypt",
      "Akkad",
      "Babylonia",
      "Assyria",
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

  // Wars Data
  const warsByRegion = {
    "Europe": [
      "Peloponnesian War",
      "Punic Wars",
      "Hundred Years' War",
      "Thirty Years' War",
      "Napoleonic Wars",
      "World War I",
      "World War II",
      "Cold War Conflicts",
      "Yugoslav Wars",
    ],
    "Asia": [
      "Sino-Japanese War",
      "Vietnam War",
      "Mongol Conquests",
      "Korean War",
    ],
  };

  // Format Function
  const formatName = (name) => {
    return name.replace(/([A-Z])/g, " $1").trim(); // Inserts space before uppercase letters
  };

  return (
    <Router basename="/">
      <header className="header">
        <div className="header-text-container">
          <img src="/h.png" alt="Logo" />
          <div className="header-text">
            <h1>Histopedia</h1>
            <h3>A GUIDE TO ANTIQUITY</h3>
          </div>
        </div>
        <div className="header-buttons">
          {/* Explore Civilizations Dropdown */}
          <nav className="dropdown-menu">
            <button className="menu-button">
              Explore Civilizations
            </button>
            <div className="dropdown">
              {Object.entries(civilizationEras).map(([era, civilizations]) => (
                <div key={era} className="dropdown-item">
                  <span>{era}</span>
                  <div className="sub-menu">
                    {civilizations.map((civilization) => (
                      <NavLink
                        to={`/${civilization}`}
                        key={civilization}
                        className={({ isActive }) =>
                          `sub-menu-item ${isActive ? "active-link" : ""}`
                        }
                      >
                        {formatName(civilization)}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          {/* Explore Wars Dropdown */}
          <nav className="dropdown-menu">
            <button className="menu-button">
              Explore Wars
            </button>
            <div className="dropdown">
              {Object.entries(warsByRegion).map(([region, wars]) => (
                <div key={region} className="dropdown-item">
                  <span>{region}</span>
                  <div className="sub-menu">
                    {wars.map((war) => (
                      <NavLink
                        to={`/region/${region.toLowerCase()}`}
                        key={war}
                        className={({ isActive }) =>
                          `sub-menu-item ${isActive ? "active-link" : ""}`
                        }
                      >
                        {war}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          <div className="home">
            <a href="/">
              <img src="h.png" alt="home" />
            </a>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:civilizationName" element={<Civilization />} />
        <Route path="/region/:regionName" element={<Region />} /> {/* Dynamic region route */}
      </Routes>
    </Router>
  );
};

export default App;
