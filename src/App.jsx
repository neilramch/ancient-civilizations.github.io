import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Civilization from "./pages/Civilization";
import Region from "./pages/wars/Region";
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
      "First Sino-Japanese War",
      "Second Sino-Japanese War",
      "Vietnam War",
      "Mongol Conquests",
      "Korean War",
      "Taiping Rebellion",
      "Indian Rebellion of 1857",
    ],
      "Americas": [
      "American Revolutionary War",
      "War of 1812",
      "Mexican-American War",
      "American Civil War",
      "Spanish-American War",
    ],
      "Middle East": [
      "Crusades",
      "Arab-Israeli Wars",
      "Iran-Iraq War",
      "Gulf War",
      "Syrian Civil War",
    ],
      "Africa": [
      "Punic Wars",
      "Zulu Wars",
      "Boer Wars",
      "Ethiopian-Adal War",
      "Mfecane",
      "Nigerian Civil War",
      "Rwandan Genocide",
      "South African Border War",
      "Libyan Civil War",
    ],

      "Oceania": [
      "New Zealand Wars",
      "World War II Pacific Theater",
      "Bougainville Civil War",
      "Fiji Coup Conflicts",
      "Timor-Leste Independence War",
    ],
      "South Asia": [
      "Maurya-Kalinga War",
      "Delhi Sultanate Conquests",
      "Mughal-Maratha Wars",
      "Anglo-Sikh Wars",
      "Indian Rebellion of 1857",
      "Bangladesh Liberation War",
      "Kashmir Conflict",
    ],
      "Central Asia": [
      "Persian-Achaemenid Conquests",
      "Mongol Conquests",
      "Timur's Campaigns",
      "Russian Conquest of Asia",
      "Basmachi Rebellion",
      "Soviet-Afghan War",
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
              <img src="/globe.gif" />
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

          <nav className="dropdown-menu">
  <button className="menu-button">Explore Wars
    <img src="/war.svg" />
  </button>
  <div className="dropdown">
    {Object.entries(warsByRegion).map(([region, wars]) => (
      <div key={region} className="dropdown-item">
        <span>{region}</span>
        <div className="sub-menu">
          {wars.map((war) => (
            <NavLink
              to={`/region/${region.toLowerCase()}/${war
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+ElEQVR4nO2YP4sTURTFnyKK4N9iLdbGTgmIlWHm3XPeQzbCfAOtxMrazq9ga2lrJQgigqUIuiysLFjZLDY2LioWgqTQxZEnk+wYZieJmZ15gXvgQCDJ3Pt7N+dOEmNU0+W9v0DiVXB4bJZRztlrJD6TyAt/A5CZJdIhAPcA2S1BjPybxH1jzGETs/r9/ikSTysA/jGAFwDOmhglIldIfJgGUfJH59Kr5Wtwn9e2CXGLxHAOiJGH4b17IHKXxM/WQbIsO0bKg/8AmLA8SpLkeHEoAORTayBJkpwHsLE4xNhboxUNYAWQlwcOAsADstMgRLEE5Ktzcj3U8N4fCRsubLq2V2tTMLuhRqgVCpL2RqME1tqTpDw5KIAKP/fen2kUwvv0EinvW4TIi+lsO+cuNwIB4CYgP9qG4J6HJG8vMIVx2PJI/LDX6x2dCyJN03Pl9RePZd1auzoTRNUNKS7LFwBrtRAA7lR9RYjNgPwqr+hyHk4AeNx1g5wf6NlgMDhdnsTb4snvXTfH2f23V0A2xyAhRCTeWWsvRtBgPouLXrcAvK7MSdcNckZP3VpdN0gFmVDXJ02dyIS6PmnqRCbU9UkzholMvXibtagg0IlQP1o10oxQM5JrRuqkGaFmJNeM1EkzQs1IrhmpE4k3sf+wwn7/LqpUpnH9AdSDjGMNvIycAAAAAElFTkSuQmCC" alt="home" />

          
            </a>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:civilizationName" element={<Civilization />} />
        <Route path="/region/:regionName" element={<Region />} /> {/* Dynamic region route */}
        <Route path="/region/:regionName/:warName" element={<Region />} />

      </Routes>
    </Router>
  );
};

export default App;
