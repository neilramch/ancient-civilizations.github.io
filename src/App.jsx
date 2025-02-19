import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Civilization from "./pages/Civilization";
import Region from "./pages/wars/Region";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import Innovation from "./pages/innovation/Innovation";
import Science from "./pages/innovation/science/Science";
import Physical from "./pages/innovation/science/physical/Physical";
import Physics from "./pages/innovation/science/physical/physics/Physics";
import AncientPhysics from "./pages/innovation/science/physical/physics/AncientPhysics";
import ClassicalPhysics from "./pages/innovation/science/physical/physics/ClassicalPhysics";
import NineteenthCenturyPhysics from "./pages/innovation/science/physical/physics/NineteenthCenturyPhysics";
import QuantumRevolution from "./pages/innovation/science/physical/physics/Quantum";
import RelativityModernPhysics from "./pages/innovation/science/physical/physics/RelativityModernPhysics";
import FuturePhysics from "./pages/innovation/science/physical/physics/FuturePhysics";
import Chemistry from "./pages/innovation/science/physical/chemistry/Chemistry";
import Alchemy from "./pages/innovation/science/physical/chemistry/Alchemy";
import ModernChemistry from "./pages/innovation/science/physical/chemistry/ModernChemistry";
import PeriodicTable from "./pages/innovation/science/physical/chemistry/Periodic";
import AtomicTheory from "./pages/innovation/science/physical/chemistry/AtomicTheory";
import OrganicChemistry from "./pages/innovation/science/physical/chemistry/OrganicChemistry";
import FutureChemistry from "./pages/innovation/science/physical/chemistry/FutureChemistry";
import Astronomy from "./pages/innovation/science/physical/astronomy/Astronomy";
import AncientStargazing from "./pages/innovation/science/physical/astronomy/AncientStargazing";
import Einstein from "./pages/innovation/science/physical/astronomy/Einstein";
import CopernicanRevolution from "./pages/innovation/science/physical/astronomy/CopernicanRevolution";
import AgeOfTelescopes from "./pages/innovation/science/physical/astronomy/Telescopes";
import SpaceAge from "./pages/innovation/science/physical/astronomy/SpaceAge";
import FutureAstronomy from "./pages/innovation/science/physical/astronomy/FutureAstronomy";
import EarthSciences from "./pages/innovation/science/physical/earth/Earth";
import AncientGeology from "./pages/innovation/science/physical/earth/AncientGeology";
import AgeOfExploration from "./pages/innovation/science/physical/earth/Exploration";
import ModernGeology from "./pages/innovation/science/physical/earth/ModernGeology";
import PlateTectonics from "./pages/innovation/science/physical/earth/PlateTectonics";
import ClimateScience from "./pages/innovation/science/physical/earth/Climate";
import FutureEarthSciences from "./pages/innovation/science/physical/earth/FutureEarth";
import Life from "./pages/innovation/science/life/LifeScience";
import Biology from "./pages/innovation/science/life/biology/Biology";
import AncientBiology from "./pages/innovation/science/life/biology/AncientBiology";
import MicroscopicWorld from "./pages/innovation/science/life/biology/Microscopic";
import DarwinEvolution from "./pages/innovation/science/life/biology/DarwinEvolution";
import Chatbot from "./components/Chatbot";

const App = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Civilization Data
  const civilizationEras = {
    "Bronze Age (c. 3500 BCE – c. 1200 BCE)": [
      "Sumer",
      "IndusValley",
      "Egypt",
      "Akkad",
      "Babylonia",
      "Assyria",
      "Hittites",
    ],
    "Iron Age (c. 1200 BCE – c. 500 CE)": [
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

  document.addEventListener("DOMContentLoaded", function () {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const menuButton = document.querySelector(".menu-button");
    const dropdown = document.querySelector(".dropdown");
  
    // Toggle dropdown on click
    menuButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click from bubbling to document
      dropdownMenu.classList.toggle("active");
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("active");
      }
    });
  });
  
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
        <div className="menu-container">
              <h3>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
              </h3>
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
            <nav className="dropdown-menu">
              <Link to ="/innovation" className="menu-button">
                Explore Innovations
                <img src="/globe.gif" />
              </Link>
            </nav>


            <div className="home">
              <a href="/">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+ElEQVR4nO2YP4sTURTFnyKK4N9iLdbGTgmIlWHm3XPeQzbCfAOtxMrazq9ga2lrJQgigqUIuiysLFjZLDY2LioWgqTQxZEnk+wYZieJmZ15gXvgQCDJ3Pt7N+dOEmNU0+W9v0DiVXB4bJZRztlrJD6TyAt/A5CZJdIhAPcA2S1BjPybxH1jzGETs/r9/ikSTysA/jGAFwDOmhglIldIfJgGUfJH59Kr5Wtwn9e2CXGLxHAOiJGH4b17IHKXxM/WQbIsO0bKg/8AmLA8SpLkeHEoAORTayBJkpwHsLE4xNhboxUNYAWQlwcOAsADstMgRLEE5Ktzcj3U8N4fCRsubLq2V2tTMLuhRqgVCpL2RqME1tqTpDw5KIAKP/fen2kUwvv0EinvW4TIi+lsO+cuNwIB4CYgP9qG4J6HJG8vMIVx2PJI/LDX6x2dCyJN03Pl9RePZd1auzoTRNUNKS7LFwBrtRAA7lR9RYjNgPwqr+hyHk4AeNx1g5wf6NlgMDhdnsTb4snvXTfH2f23V0A2xyAhRCTeWWsvRtBgPouLXrcAvK7MSdcNckZP3VpdN0gFmVDXJ02dyIS6PmnqRCbU9UkzholMvXibtagg0IlQP1o10oxQM5JrRuqkGaFmJNeM1EkzQs1IrhmpE4k3sf+wwn7/LqpUpnH9AdSDjGMNvIycAAAAAElFTkSuQmCC" alt="home" />

            
              </a>
            </div>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:civilizationName" element={<Civilization />} />
        <Route path="/region/:regionName" element={<Region />} /> {/* Dynamic region route */}
        <Route path="/region/:regionName/:warName" element={<Region />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/science" element={<Science />} />
        <Route path="/science/physical" element={<Physical />} />
        <Route path="/science/physical/physics" element={<Physics />} />
        <Route path="/science/physical/physics/ancient" element={<AncientPhysics />} />
        <Route path="/science/physical/physics/classical" element={<ClassicalPhysics />} />
        <Route path="/science/physical/physics/nineteenth-century" element={<NineteenthCenturyPhysics />} />
        <Route path="/science/physical/physics/quantum-revolution" element={<QuantumRevolution />} />
        <Route path="/science/physical/physics/modern" element={<RelativityModernPhysics />} />
        <Route path="/science/physical/physics/future" element={<FuturePhysics/>} />
        <Route path="/science/physical/chemistry" element={<Chemistry />} />
        <Route path="/science/physical/chemistry/alchemy" element={<Alchemy />} />
        <Route path="/science/physical/chemistry/modern" element={<ModernChemistry />} />
        <Route path="/science/physical/chemistry/periodic-table" element={<PeriodicTable />} />
        <Route path="/science/physical/chemistry/atomic-theory" element={<AtomicTheory />} />
        <Route path="/science/physical/chemistry/organic" element={<OrganicChemistry />} />
        <Route path="/science/physical/chemistry/future" element={<FutureChemistry />} />
        <Route path="/science/physical/astronomy" element={<Astronomy />} />
        <Route path="/science/physical/astronomy/ancient-stargazing" element={<AncientStargazing />} />
        <Route path="/science/physical/astronomy/einstein" element={<Einstein />} />
        <Route path="/science/physical/astronomy/copernican-revolution" element={<CopernicanRevolution />} />
        <Route path="/science/physical/astronomy/telescopes" element={<AgeOfTelescopes />} />
        <Route path="/science/physical/astronomy/space-age" element={<SpaceAge />} />
        <Route path="/science/physical/astronomy/future" element={<FutureAstronomy />} />
        <Route path="/science/physical/earth" element={<EarthSciences />} />
        <Route path="/science/physical/earth/ancient" element={<AncientGeology />} />
        <Route path="/science/physical/earth/exploration" element={<AgeOfExploration />} />
        <Route path="/science/physical/earth/modern" element={<ModernGeology />} />
        <Route path="/science/physical/earth/platetectonics" element={<PlateTectonics />} />
        <Route path="/science/physical/earth/climate" element={<ClimateScience />} />
        <Route path="/science/physical/earth/future" element={<FutureEarthSciences />} />
        <Route path="/science/life" element={<Life />} />
        <Route path="/science/life/biology" element={<Biology />} />
        <Route path="/science/life/biology/ancient" element={<AncientBiology />} />
        <Route path="/science/life/biology/microscopic" element={<MicroscopicWorld />} />
        <Route path="/science/life/biology/darwin-evolution" element={<DarwinEvolution />} />
      </Routes>
      <div className='chat-container'>
          <Chatbot />
        </div>
    </Router>
  );
};

export default App;