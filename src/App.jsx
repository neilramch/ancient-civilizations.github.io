import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Civilization from "./pages/Civilization";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";

const App = () => {
  const civilizationEras = {
    "Bronze Age - Early Civilizations (c. 3500 BCE – c. 1200 BCE) - Formation of early cities, writing, and agriculture.": [
      "Sumer",
      "IndusValley",
      "Egypt",
      "Akkad", 
      "Babylonia",
      "Hittites",
    ],
    "Iron Age - Classical Civilizations (c. 1200 BCE – c. 500 CE) - Rise of empires, philosophy, and significant cultural achievements.": [
      "Greece",
      "Rome",
      "Persia",
      "China",
      "VedicIndia",
    ],
    "Later Civilizations (c. 500 CE – c. 1500 CE) - Medieval societies and pre-modern empires.": [
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
    <>
      <Header></Header>
      <Router basename="/">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:civilizationName" element={<Civilization />} />
        </Routes>

        <nav className="tile-container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `tile ${isActive ? "active-link" : ""}`
            }
          >
            <div className="tile-content">
              <h3>Home</h3>
            </div>
          </NavLink>

          {Object.entries(civilizationEras).map(([era, civilizations]) => (
            <div key={era}>
              <h2 className="era-title">{era}</h2>
              <div className="era-container">
                {civilizations.map((civilization) => (
                  <NavLink
                    to={`/${civilization}`}
                    key={civilization}
                    className={({ isActive }) =>
                      `tile ${isActive ? "active-link" : ""}`
                    }
                  >
                    <div className="tile-content">
                      <h3>{formatCivilizationName(civilization)}</h3>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </Router>
    </>
  );
};

export default App;
