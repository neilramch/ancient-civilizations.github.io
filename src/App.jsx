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

  const formatCivilizationName = (name) => {
    return name.replace(/([A-Z])/g, " $1").trim(); // Inserts space before uppercase letters
  };
  
  const toggleSubmenu = (era) => {
    setOpenSubmenu(openSubmenu === era ? null : era); // Toggle submenu visibility
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
        <nav className="dropdown-menu">
          <button className="menu-button">Explore Civilizations <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO2ZMQ6CUBBE5xiKJ1I8j9hKPJZYwIUM2FCNIVkKSUw+FP8vOC/ZbjeZYT7ZYgEhxFLOACoAbwBMXJ1pyeeauDsQzx9VzkliGOgBXABkSE8GoDBNg7ZTyNDTmodBbxSm7RHS3FnzHv7YmbY2pHl8i15hqD4ZiQSViDOoRCY0EbZ3g40YqWMYSQ1lxBlUIs6gEnEG17RHmq0YqWMYSQ1lxBlUIs6gEnEG17RHmq0YqWMYSQ1lxBlUIs7g3yXSWqOHk9uUg2l7IYDK8entOuf0lltzb2Y8HkOPoYNlhO29tG5zv8LJIhz/mZTVmpbgJIQQ+OIDvrPJx04tYoYAAAAASUVORK5CYII=" alt="menu-squared-2"></img></button>
          <div className="dropdown">
            {Object.entries(civilizationEras).map(([era, civilizations]) => (
              <div key={era} className="dropdown-item">
                <span>{era}</span>
                <div className="sub-menu">
                  {civilizations.map((civilization) => (
                    <NavLink to={`/${civilization}`} key={civilization}  className={({ isActive }) =>
                      `sub-menu-item ${isActive ? "active-link" : ""}`
                    }>
                      {formatCivilizationName(civilization)}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </nav>
        <div className="home">
            <a href="/">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVR4nO3Wz6tMcRjH8RduCCldSkLpLu5SoqQkbCg7Gws73fwJ7uIu78a/YGEjxYaVDaGukV8LbKyUkPxKSpS48tWp52oac82ZMWfmTL7veuo05/t9ns/nfJ/zzCFTiq24ietxPZLsx1ukiA84ZIRYghn8CANXIlL8NhNras1aXArRP3EaS0P4dIu5dWrKdjxtaqPDbdYcwLtY8wK71Izj+BICH2LbX9Zuwb1Y+xUnmu6lRaJyxqJ9Fgqew6oS+1bgTNO+4nr5sIxsxp2mJzvVQ46p2FvkuNtGeOVG9uFNFHmJ3f+QaweeLXICqSojxfQ5hfkocBXjfcg7HrlSxHTUqsRI62idxbI+5i9yzUbuosblKoxM4kkk/YSjquMIPlbxsh/D50j4GBOqZyJqLRgpNPRttJ7HaoNjJc62GdFdsQE3IsF8vHzD4iS+hZYGNpXduBevY+Mr7DF8duJ5aHqPg2Xcf48Nc9ioPqzHtZYu+eMreg0utkyK4h2pG2MtGi+E9t88aBqtA/tQ65HUovV+883beBT/F6NiZDI0NzotrCuprL5sZECkfCL/24mkHqPXOh3JRnT3hGt/ImXJRuQTKUdurS5JubVKklurS1JurZLk1uqSlFurJLm1uiTl1hr11ko1j440aiAydYhbnW1kMvrBL/A6qXQvVsG5AAAAAElFTkSuQmCC" alt="home--v1"></img>
            </a>
          </div>
          </div>
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
