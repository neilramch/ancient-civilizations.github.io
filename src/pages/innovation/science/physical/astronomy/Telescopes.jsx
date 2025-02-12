import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const AgeOfTelescopes = () => {
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
        <h1>The Age of Telescopes: Unlocking the Skies (1600 CE – 1800 CE)</h1>
        <p>
          Explore the transformative era of telescopic discovery, where groundbreaking observations of moons, planets, and stars redefined our understanding of the cosmos.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Galileo Galilei: The First Telescopic Astronomer</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("galileo")}
            >
              {expandedSections.galileo ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.galileo && (
            <div className="section-content">
              <p>
                In 1609, Galileo Galilei (1564–1642) constructed his own telescope, refining existing designs to achieve higher magnifications. His pioneering observations revolutionized astronomy and challenged long-held beliefs about the universe.
              </p>
              <h3>Key Observations:</h3>
              <ul>
                <li>
                  <strong>Moons of Jupiter:</strong> Galileo discovered four large moons orbiting Jupiter (Io, Europa, Ganymede, and Callisto), demonstrating that not all celestial bodies orbit the Earth.
                </li>
                <li>
                  <strong>Phases of Venus:</strong> The observed phases of Venus provided direct evidence for the heliocentric model of the solar system.
                </li>
                <li>
                  <strong>Surface of the Moon:</strong> Galileo observed mountains, craters, and valleys, dispelling the notion of celestial perfection.
                </li>
                <li>
                  <strong>Milky Way:</strong> Galileo discovered that the Milky Way consists of countless individual stars.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff/lossy-page1-1280px-Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff.jpg"
                alt="Galileo observing Jupiter"
              />
              <p>
                Galileo’s observations, published in his book <i>Sidereus Nuncius</i> (1610), marked the beginning of modern observational astronomy and earned him both acclaim and opposition from the Catholic Church.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Isaac Newton and the Reflecting Telescope</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("newton")}
            >
              {expandedSections.newton ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.newton && (
            <div className="section-content">
              <p>
                In 1668, Sir Isaac Newton (1643–1727) designed and built the first practical reflecting telescope, known as the Newtonian telescope. This invention addressed chromatic aberration, a limitation of refracting telescopes.
              </p>
              <h3>Features of the Newtonian Telescope:</h3>
              <ul>
                <li>
                  Used mirrors instead of lenses to focus light, eliminating color distortion caused by refraction.
                </li>
                <li>
                  Compact and lightweight design, making it easier to build and use.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/db/Newton_telescope_replica_1668.jpg"
                alt="Replica of Newton's Reflecting Telescope"
              />
              <p>
                Newton’s telescope design became a foundational model for modern telescopes, enabling clearer and more precise astronomical observations.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>William Herschel: Mapping the Stars</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("herschel")}
            >
              {expandedSections.herschel ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.herschel && (
            <div className="section-content">
              <p>
                William Herschel (1738–1822), a self-taught astronomer, advanced the field of astronomy with his construction of large, high-powered telescopes and meticulous star mapping.
              </p>
              <h3>Major Achievements:</h3>
              <ul>
                <li>
                  <strong>Discovery of Uranus (1781):</strong> Herschel became the first person to discover a new planet since antiquity, expanding the known boundaries of the solar system.
                </li>
                <li>
                  <strong>Star Catalogs:</strong> Herschel cataloged over 2,500 nebulae and star clusters, laying the groundwork for modern deep-sky astronomy.
                </li>
                <li>
                  <strong>Infrared Radiation:</strong> Herschel discovered infrared radiation in sunlight by observing temperature variations beyond the visible spectrum.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/62/Herschel_40_foot.jpg"
                alt="William Herschel's 40-foot Telescope"
              />
              <p>
                Herschel’s observations of binary stars, nebulae, and galaxies revolutionized our understanding of the universe’s structure and scale.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The Age of Telescopes expanded humanity’s view of the cosmos, setting the stage for future discoveries in astronomy and astrophysics.
        </p>
        <Link to="/science/physical/astronomy" className="back-link">
          Back to Astronomy
        </Link>
      </footer>
    </div>
  );
};

export default AgeOfTelescopes;
