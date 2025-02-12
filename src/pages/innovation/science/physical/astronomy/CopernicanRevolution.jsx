import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const CopernicanRevolution = () => {
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
        <h1>The Copernican Revolution: Transforming Our View of the Cosmos (1500 CE – 1600 CE)</h1>
        <p>
          Explore the groundbreaking work of Nicolaus Copernicus, Galileo Galilei, and Johannes Kepler, which challenged the geocentric model and laid the foundation for modern astronomy.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Nicolaus Copernicus and the Heliocentric Model</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("copernicus")}
            >
              {expandedSections.copernicus ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.copernicus && (
            <div className="section-content">
              <p>
  Nicolaus Copernicus (1473–1543) fundamentally transformed our understanding of the cosmos by challenging the geocentric model that had dominated for over a millennium. In his seminal work, <i>De revolutionibus orbium coelestium</i> ("On the Revolutions of the Heavenly Spheres"), published in 1543, Copernicus proposed the heliocentric model, placing the Sun, rather than Earth, at the center of the solar system. This revolutionary idea marked the beginning of the Scientific Revolution and laid the groundwork for modern astronomy.
</p>
<h3>Key Concepts:</h3>
<ul>
  <li>
    <strong>Heliocentric Model:</strong> Copernicus proposed that the planets, including Earth, revolve around the Sun in circular orbits. This model offered a radical departure from the Ptolemaic geocentric system, which placed Earth at the universe's center and required complex systems of epicycles to explain planetary motion.
  </li>
  <li>
    <strong>Earth’s Rotation:</strong> Copernicus suggested that Earth rotates on its axis once every 24 hours, explaining the apparent daily motion of the Sun, Moon, and stars across the sky. This insight removed the need for the celestial sphere to rotate around Earth at immense speeds.
  </li>
  <li>
    <strong>Retrograde Motion Simplified:</strong> The heliocentric model elegantly explained the apparent retrograde motion of planets (when a planet appears to move backward in the sky) as a natural consequence of Earth overtaking slower-moving outer planets in its orbit. This explanation eliminated the need for the complex and artificial epicycles of the geocentric model.
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Copernicus’s heliocentric model marked a paradigm shift in astronomy, challenging long-standing theological and scientific beliefs rooted in the geocentric view. While his model initially faced resistance, it inspired future scientists such as Galileo Galilei, Johannes Kepler, and Isaac Newton to build upon and refine his ideas. Copernicus's work not only simplified the understanding of celestial mechanics but also symbolized the transition from medieval to modern science, emphasizing observation, mathematics, and reason over dogma.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Kopernikus%2C_Nikolaus_-_Reußner_1578_Portrait1.jpg"
                alt="Nicolaus Copernicus"
              />
              <p>
                Although Copernicus' model still retained circular orbits, which were later corrected, it marked a turning point in our understanding of the cosmos, shifting the focus from Earth to the Sun.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Galileo Galilei: Observations that Confirmed the Heliocentric Model</h2>
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
  Galileo Galilei (1564–1642), often referred to as the "Father of Modern Science," revolutionized astronomy and physics by combining observation, experimentation, and mathematics. Using his improved telescope, Galileo provided critical observational evidence supporting the heliocentric model, challenging centuries-old geocentric views and reshaping humanity’s understanding of the cosmos.
</p>
<h3>Key Discoveries:</h3>
<ul>
  <li>
    <strong>Moons of Jupiter:</strong> In 1610, Galileo discovered four moons orbiting Jupiter, later named the Galilean moons (Io, Europa, Ganymede, and Callisto). 
    <ul>
      <li>This observation demonstrated that not all celestial objects revolve around Earth, directly contradicting the geocentric model.</li>
      <li>It provided compelling evidence for the heliocentric model by showcasing a miniature system of objects orbiting a larger body.</li>
    </ul>
  </li>
  <li>
    <strong>Phases of Venus:</strong> Galileo observed that Venus exhibited a full range of phases, similar to the Moon. 
    <ul>
      <li>These phases could only be explained if Venus orbited the Sun, as the heliocentric model proposed.</li>
      <li>In the geocentric model, Venus's motion would not allow such phases to occur, providing direct evidence against the Ptolemaic system.</li>
    </ul>
  </li>
  <li>
    <strong>Sunspots:</strong> Galileo documented dark spots on the Sun’s surface, known as sunspots.
    <ul>
      <li>He observed their movement, concluding that the Sun rotates on its axis.</li>
      <li>This discovery challenged the Aristotelian idea of celestial perfection, which held that heavenly bodies were unchanging and flawless.</li>
    </ul>
  </li>
  <li>
    <strong>Mountains on the Moon:</strong> Galileo’s detailed observations of the Moon revealed a rugged surface with mountains, valleys, and craters.
    <ul>
      <li>These findings contradicted the Aristotelian belief that celestial spheres were perfectly smooth and unblemished.</li>
      <li>By showing that the Moon was a world with features similar to Earth’s, Galileo further dismantled the idea of a fundamental separation between the celestial and terrestrial realms.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Galileo’s discoveries provided critical support for the Copernican heliocentric model, challenging the geocentric worldview that had dominated for centuries. His work emphasized the importance of empirical observation and experimentation, laying the foundation for the scientific method. Despite facing opposition from religious and academic authorities, Galileo’s contributions to astronomy, physics, and science as a whole remain monumental, symbolizing the triumph of evidence-based inquiry over dogma.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Galileo_facing_the_Roman_Inquisition.jpg/1280px-Galileo_facing_the_Roman_Inquisition.jpg"
                alt="Galileo Galilei"
              />
              <p>
                Galileo’s work faced significant opposition from the Catholic Church, leading to his trial and house arrest. Despite this, his contributions profoundly advanced the acceptance of the heliocentric theory.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Johannes Kepler and the Laws of Planetary Motion</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("kepler")}
            >
              {expandedSections.kepler ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.kepler && (
            <div className="section-content">
            <p>
  Johannes Kepler (1571–1630) made groundbreaking contributions to astronomy by refining the heliocentric model proposed by Copernicus. By introducing elliptical orbits, Kepler corrected the assumption of circular planetary paths, aligning the model with observational data. His three laws of planetary motion provided a mathematical framework that remains fundamental to our understanding of celestial mechanics.
</p>
<h3>Kepler’s Laws:</h3>
<ul>
  <li>
    <strong>First Law (Law of Ellipses):</strong> 
    <ul>
      <li>Kepler discovered that planets move in elliptical orbits, with the Sun at one of the two foci of the ellipse.</li>
      <li>This law corrected the Copernican assumption of circular orbits, providing a more accurate description of planetary paths.</li>
      <li>The elliptical shape of orbits explained variations in a planet’s speed and distance from the Sun during its orbit.</li>
    </ul>
  </li>
  <li>
    <strong>Second Law (Law of Equal Areas):</strong> 
    <ul>
      <li>Kepler observed that a line segment joining a planet to the Sun sweeps out equal areas in equal intervals of time.</li>
      <li>This law describes the variable speed of a planet along its orbit, moving faster when closer to the Sun (perihelion) and slower when farther from the Sun (aphelion).</li>
      <li>The law reflects the conservation of angular momentum in celestial motion.</li>
    </ul>
  </li>
  <li>
    <strong>Third Law (Harmonic Law):</strong> 
    <ul>
      <li>Kepler discovered a precise mathematical relationship between the time a planet takes to complete its orbit (orbital period) and the average distance from the Sun (semi-major axis).</li>
      <li>The square of the orbital period (<i>T²</i>) is proportional to the cube of the semi-major axis (<i>a³</i>): <i>T² ∝ a³</i>.</li>
      <li>This law provided a unifying principle for the motion of all planets, linking orbital characteristics to their distances from the Sun.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Kepler’s laws of planetary motion marked a pivotal moment in the history of astronomy, bridging the gap between the heliocentric model and Newton’s theory of gravitation. By combining observational data with mathematical precision, Kepler’s work validated and advanced the Copernican system. His insights laid the foundation for Isaac Newton’s law of universal gravitation and continue to inform modern astrophysics, space exploration, and our understanding of orbital mechanics.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/74/JKepler.jpg"
                alt="Johannes Kepler"
              />
              <p>
                Kepler’s work, particularly his use of observational data from Tycho Brahe, laid the foundation for Isaac Newton’s later work on gravitation.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The Copernican Revolution transformed astronomy and science, replacing centuries-old geocentric views with a heliocentric model and paving the way for modern physics and cosmology.
        </p>
        <Link to="/science/physical/astronomy" className="back-link">
          Back to Astronomy
        </Link>
      </footer>
    </div>
  );
};

export default CopernicanRevolution;
