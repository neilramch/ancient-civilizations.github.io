import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const ClimateScience = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="module-container">
      <header className="module-header">
        <h1>Climate Science and Earth Systems (1970 CE – Present)</h1>
        <p>
          Dive into the modern era of Earth science, where advancements in
          climate research, oceanography, and systems modeling reveal the
          intricate interplay of Earth's physical, chemical, and biological
          processes.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Advancements in Climate Science</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("climateScience")}
            >
              {expandedSections.climateScience ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.climateScience && (
            <div className="section-content">
              <p>
                Climate science emerged as a critical field in the mid-20th
                century, fueled by concerns over global warming and the need to
                understand Earth's climate systems. Scientists began combining
                data from ice cores, tree rings, and satellite observations to
                reconstruct past climates and predict future trends.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NOAA_WP-3D_Orions.jpg/1280px-NOAA_WP-3D_Orions.jpg" />
              <p className="caption">Two NOAA WP-3D Orions hurricane hunter aircraft</p>
              <h3>Key Milestones:</h3>
              <ul>
                <li>
                  <strong>1970:</strong> The establishment of NOAA (National
                  Oceanic and Atmospheric Administration) marked a turning point
                  for systematic climate observation and forecasting.
                </li>
                <li>
                  <strong>1988:</strong> The Intergovernmental Panel on Climate
                  Change (IPCC) was founded to assess climate change science and
                  its global impacts.
                </li>
                <li>
                  <strong>1997:</strong> The Kyoto Protocol became the first
                  international treaty aimed at reducing greenhouse gas
                  emissions.
                </li>
              </ul>
              <h3>Breakthrough Discoveries:</h3>
              <ul>
                <li>
                  Ice core analysis revealed atmospheric carbon dioxide and
                  methane concentrations over hundreds of thousands of years,
                  linking greenhouse gases to global temperatures.
                </li>
                <li>
                  Satellite data provided real-time monitoring of sea ice
                  extent, ocean temperatures, and atmospheric changes.
                </li>
                <li>
                  Climate models incorporated complex feedback loops, such as
                  albedo effects and carbon cycles, to simulate future climate
                  scenarios.
                </li>
              </ul>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Oceanography and Marine Systems</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("oceanography")}
            >
              {expandedSections.oceanography ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.oceanography && (
            <div className="section-content">
              <p>
                The study of oceans has revealed their central role in Earth's
                climate and ecosystems. Advances in oceanography have
                highlighted the importance of currents, marine biodiversity, and
                the ocean's capacity to absorb carbon dioxide.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Blue_Linckia_Starfish.JPG" />
              <p className="caption">Biodiversity of a coral reef</p>
              <h3>Key Concepts:</h3>
              <ul>
                <li>
                  <strong>Thermohaline Circulation:</strong> The "global
                  conveyor belt" of ocean currents redistributes heat and
                  regulates climate patterns.
                </li>
                <li>
                  <strong>Coral Reefs:</strong> Biodiversity hotspots that are
                  increasingly threatened by ocean acidification and warming.
                </li>
                <li>
                  <strong>Sea Level Rise:</strong> Accelerated by melting ice
                  caps and thermal expansion, impacting coastal communities.
                </li>
              </ul>
              <h3>Technological Innovations:</h3>
              <ul>
                <li>
                  Autonomous underwater vehicles (AUVs) and remotely operated
                  vehicles (ROVs) have explored deep-sea environments.
                </li>
                <li>
                  Satellites like NASA's Jason series monitor sea surface
                  temperatures and ocean height.
                </li>
                <li>
                  Ocean buoys collect real-time data on water temperature,
                  salinity, and currents.
                </li>
              </ul>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Earth Systems Science</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("earthSystems")}
            >
              {expandedSections.earthSystems ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.earthSystems && (
            <div className="section-content">
              <p>
                Earth Systems Science integrates module, biology, chemistry,
                and physics to study the planet as a whole. By examining the
                interactions between the lithosphere, atmosphere, hydrosphere,
                and biosphere, scientists gain insights into global processes
                and their effects on life.
              </p>
              <img src="https://farmcarbontoolkit.org.uk/wp-content/uploads/2023/05/The-Carbon-Cycle-Source-Alamy-2020-The-Carbon-Cycle-8.png" />
              <p className="caption">Over 99.9% of all of the earth’s carbon is stored and fixed in the earth’s crust – the lithosphere.</p>
              <h3>Interconnected Systems:</h3>
              <ul>
                <li>
                  <strong>Carbon Cycle:</strong> Tracks carbon movement through
                  the atmosphere, oceans, soil, and living organisms.
                </li>
                <li>
                  <strong>Water Cycle:</strong> Explores evaporation,
                  precipitation, and runoff, vital for sustaining ecosystems.
                </li>
                <li>
                  <strong>Energy Balance:</strong> Studies the distribution and
                  exchange of solar radiation and heat across the planet.
                </li>
              </ul>
              <h3>Applications:</h3>
              <ul>
                <li>
                  Climate change mitigation through carbon capture and
                  geoengineering techniques.
                </li>
                <li>
                  Disaster preparedness for hurricanes, droughts, and
                  wildfires.
                </li>
                <li>
                  Sustainable resource management, balancing human needs with
                  environmental conservation.
                </li>
              </ul>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          Climate science and Earth systems research highlight humanity's role
          in shaping and protecting our planet. These fields underscore the
          importance of sustainable practices and global cooperation to ensure
          Earth's future health.
        </p>
        <Link to="/science/physical/earth" className="back-link">
          Back to Earth Sciences
        </Link>
      </footer>
    </div>
  );
};

export default ClimateScience;
