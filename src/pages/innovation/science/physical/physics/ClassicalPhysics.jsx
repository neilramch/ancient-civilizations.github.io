import React, { useState } from "react";
import "./ClassicalPhysics.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const ClassicalPhysics = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="classical-physics-container">
      <header className="classical-physics-header">
        <h1>Classical Physics: The Age of Laws and Theories</h1>
        <p>
          Discover the era of classical physics, marked by groundbreaking laws of
          motion, universal gravitation, and electromagnetism.
        </p>
      </header>

      <main className="classical-physics-main">
        <section className="topic">
          <div className="section-header">
            <h2>Newtonian Mechanics</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("newtonianMechanics")}
            >
              {expandedSections.newtonianMechanics ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.newtonianMechanics && (
            <div className="section-content">
              <p>
                Sir Isaac Newton (1643–1727) revolutionized physics with his
                formulation of the laws of motion and the universal law of
                gravitation. His groundbreaking work, detailed in the <i>
                  Philosophiæ Naturalis Principia Mathematica
                </i> (1687), laid the foundation for classical mechanics and
                reshaped our understanding of the physical universe.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/1280px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg"
                alt="Portrait of Sir Isaac Newton"
              />
              <h3>Timeline of Newton's Contributions:</h3>
              <ul>
                <li>
                  <strong>1666:</strong> While isolating during the Great Plague,
                  Newton formulated early ideas about calculus, optics, and
                  gravitation.
                </li>
                <li>
                  <strong>1671:</strong> Presented his design for a reflecting
                  telescope to the Royal Society, demonstrating advancements in
                  optics.
                </li>
                <li>
                  <strong>1687:</strong> Published the <i>Principia</i>, outlining
                  the three laws of motion and the universal law of gravitation.
                </li>
                <li>
                  <strong>1704:</strong> Released <i>Opticks</i>, exploring the
                  nature of light and color through experiments with prisms.
                </li>
              </ul>
              <h3>Newton's Three Laws of Motion:</h3>
              <ul>
                <li>
                  <strong>First Law (Law of Inertia):</strong> An object remains at
                  rest or in uniform motion in a straight line unless acted upon
                  by an external force.
                </li>
                <li>
                  <strong>Second Law:</strong> The force acting on an object is
                  equal to the mass of the object multiplied by its acceleration
                  (<i>F = ma</i>).
                </li>
                <li>
                  <strong>Third Law:</strong> For every action, there is an equal
                  and opposite reaction.
                </li>
              </ul>
              <h3>The Law of Universal Gravitation:</h3>
              <p>
                Newton's law of universal gravitation posits that every particle
                in the universe attracts every other particle with a force
                proportional to the product of their masses and inversely
                proportional to the square of the distance between their centers:
                <br />
                <i>F = G * (m₁ * m₂) / r²</i>
              </p>
              <ul>
                <li>
                  <strong>Key Insight:</strong> This law unified terrestrial and
                  celestial mechanics, explaining the orbits of planets and the
                  motion of objects on Earth.
                </li>
                <li>
                  <strong>Verification:</strong> Observations by astronomers like
                  Edmund Halley confirmed Newton's predictions, such as the return
                  of Halley's Comet in 1758.
                </li>
              </ul>
              <h3>Impact and Legacy:</h3>
              <p>
                Newton's work bridged the gap between ancient philosophical
                theories of motion and the modern, mathematically rigorous
                approach to science. His principles not only defined physics for
                over two centuries but also influenced disciplines like
                engineering, astronomy, and even economics.
              </p>
              <ul>
                <li>
                  Inspired advancements in space exploration, including orbital
                  mechanics and satellite technology.
                </li>
                <li>
                  Provided a foundation for Einstein's theory of relativity, which
                  built upon and refined Newton's ideas.
                </li>
                <li>
                  Revolutionized scientific methodology by emphasizing empirical
                  observation and mathematical precision.
                </li>
              </ul>
            </div>
          )}
        </section>

        <section className="topic">
        <div className="section-header">
        <h2>Electromagnetism</h2>
        <button 
          className="expand-button" 
          onClick={() => toggleSection("electromagnetism")}
        >
          {expandedSections.electromagnetism ? "Collapse" : "Expand"}
        </button>
        /
        </div>
        {expandedSections.electromagnetism && (
          <div className="section-content">
            <p>
              Electromagnetism, one of the fundamental forces of nature, unifies the phenomena of electricity and magnetism. This groundbreaking field was formalized by James Clerk Maxwell (1831–1879) through his four equations, which mathematically describe how electric and magnetic fields interact and propagate as waves. Maxwell's work laid the foundation for modern physics and technology.
            </p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Saturn_HST_2004-03-22.jpg/1280px-Saturn_HST_2004-03-22.jpg" 
              alt="Maxwell proved that the rings of Saturn were made of numerous small particles." 
            />
            <p>Maxwell proved that the rings of Saturn were made of numerous small particles.</p>
            <h3>Timeline of Electromagnetism's Development:</h3>
            <ul>
              <li>
                <strong>1600:</strong> William Gilbert, often called the "Father of Magnetism," published <i>De Magnete</i>, describing Earth's magnetic properties.
              </li>
              <li>
                <strong>1785:</strong> Charles-Augustin de Coulomb formulated Coulomb's law, quantifying the force between electric charges.
              </li>
              <li>
                <strong>1820:</strong> Hans Christian Ørsted discovered the link between electricity and magnetism, observing that an electric current produces a magnetic field.
              </li>
              <li>
                <strong>1831:</strong> Michael Faraday demonstrated electromagnetic induction, showing that a changing magnetic field induces an electric current.
              </li>
              <li>
                <strong>1861–1862:</strong> James Clerk Maxwell published his treatise on electromagnetism, presenting the four equations that describe the relationship between electric and magnetic fields.
              </li>
            </ul>
            <h3>Maxwell's Equations:</h3>
            <p>
              Maxwell's equations provide a comprehensive description of classical electromagnetism:
            </p>
            <ul>
              <li>
                <strong>Gauss's Law:</strong> The electric flux through a closed surface is proportional to the charge enclosed by the surface.
                <br /><i>∇ · E = ρ / ε₀</i>
              </li>
              <li>
                <strong>Gauss's Law for Magnetism:</strong> Magnetic monopoles do not exist; the magnetic flux through a closed surface is zero.
                <br /><i>∇ · B = 0</i>
              </li>
              <li>
                <strong>Faraday's Law of Induction:</strong> A changing magnetic field induces an electric field.
                <br /><i>∇ × E = -∂B / ∂t</i>
              </li>
              <li>
                <strong>Ampère-Maxwell Law:</strong> A changing electric field or current produces a magnetic field.
                <br /><i>∇ × B = μ₀ (J + ε₀ ∂E / ∂t)</i>
              </li>
            </ul>
            <h3>Key Concepts in Electromagnetism:</h3>
            <ul>
              <li>
                <strong>Electric Fields:</strong> Generated by electric charges, these fields describe the force exerted on other charges.
              </li>
              <li>
                <strong>Magnetic Fields:</strong> Produced by moving charges or currents, these fields influence other moving charges.
              </li>
              <li>
                <strong>Electromagnetic Waves:</strong> Maxwell's equations predicted the existence of electromagnetic waves, such as light, which propagate through space at the speed of light.
              </li>
            </ul>
            <h3>Applications and Impact:</h3>
            <p>
              Electromagnetism transformed our understanding of the physical world and catalyzed technological advancements:
            </p>
            <ul>
              <li>
                Enabled the development of electrical power generation and distribution.
              </li>
              <li>
                Revolutionized communication through inventions like the telegraph, radio, and later, wireless technology.
              </li>
              <li>
                Provided the foundation for modern electronics, including semiconductors and computers.
              </li>
              <li>
                Deepened our understanding of light, paving the way for quantum mechanics and modern optics.
              </li>
            </ul>
            <h3>Legacy:</h3>
            <p>
              Maxwell's unification of electricity and magnetism stands as one of the greatest achievements in physics, bridging the gap between classical and modern physics. His equations remain fundamental in disciplines ranging from electrical engineering to astrophysics.
            </p>
          </div>
        )}
      </section>

    <section className="topic">
    <div className="section-header">

      <h2>Wave Mechanics</h2>
      <button 
        className="expand-button" 
        onClick={() => toggleSection("waveMechanics")}
      >
        {expandedSections.waveMechanics ? "Collapse" : "Expand"}
      </button>
      </div>
      {expandedSections.waveMechanics && (
        <div className="section-content">
          <p>
            Wave mechanics emerged as a cornerstone of classical physics, exploring the behavior of waves in various media and their interactions. This study encompassed sound, water waves, and light, providing insights into both natural and engineered phenomena.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Huygens-Fresnel_BW.svg/1280px-Huygens-Fresnel_BW.svg.png" alt="Geometric arrangement for Fresnel's calculation" />
          <p>Geometric arrangement for Fresnel's calculation</p>
          <h3>Historical Milestones:</h3>
          <ul>
            <li>
              <strong>1660:</strong> Robert Boyle demonstrated the necessity of a medium for sound to travel, leading to the understanding of sound waves as mechanical vibrations in air.
            </li>
            <li>
              <strong>1678:</strong> Christiaan Huygens proposed <i>Huygens' Principle</i>, explaining the propagation of wavefronts and refraction of light.
            </li>
            <li>
              <strong>1801:</strong> Thomas Young's Double-Slit Experiment demonstrated the interference of light waves, supporting the wave theory of light.
            </li>
            <li>
              <strong>1820s:</strong> Augustin-Jean Fresnel expanded on Huygens' work, developing the mathematical framework for wave optics.
            </li>
            <li>
              <strong>1845:</strong> George Stokes described the phenomenon of wave diffraction, reinforcing the wave nature of light.
            </li>
          </ul>
          <h3>Key Concepts in Wave Mechanics:</h3>
          <ul>
            <li>
              <strong>Wave Types:</strong> Waves can be classified into mechanical waves (e.g., sound, water) and electromagnetic waves (e.g., light).
              <ul>
                <li>
                  <strong>Transverse Waves:</strong> Oscillations are perpendicular to the direction of wave propagation (e.g., light waves).
                </li>
                <li>
                  <strong>Longitudinal Waves:</strong> Oscillations are parallel to the direction of wave propagation (e.g., sound waves).
                </li>
              </ul>
            </li>
            <li>
              <strong>Wave Properties:</strong> All waves exhibit key characteristics such as wavelength, frequency, amplitude, and speed.
            </li>
            <li>
              <strong>Interference:</strong> When waves meet, they superpose, creating patterns of constructive and destructive interference.
            </li>
            <li>
              <strong>Diffraction:</strong> Waves bend around obstacles or spread out after passing through narrow openings.
            </li>
          </ul>
          <h3>Notable Experiments and Theories:</h3>
          <ul>
            <li>
              <strong>Young's Double-Slit Experiment:</strong> Demonstrated the wave nature of light by producing interference patterns.
            </li>
            <li>
              <strong>Fresnel's Equations:</strong> Provided a mathematical explanation for the behavior of light at the interface between two media.
            </li>
            <li>
              <strong>Doppler Effect:</strong> Described the change in frequency or wavelength of a wave in relation to an observer moving relative to the wave source.
            </li>
          </ul>
          <h3>Applications of Wave Mechanics:</h3>
          <ul>
            <li>
              Understanding of sound waves led to advancements in acoustics, musical instruments, and audio technology.
            </li>
            <li>
              Wave theory underpinned the development of optical devices such as lenses, microscopes, and telescopes.
            </li>
            <li>
              Insights into electromagnetic waves paved the way for radio, television, and later, wireless communication.
            </li>
            <li>
              Ocean wave studies informed navigation, coastal engineering, and renewable energy technologies like wave power.
            </li>
          </ul>
          <h3>Legacy:</h3>
          <p>
            Wave mechanics laid the groundwork for quantum mechanics, where wave-particle duality became a central theme. The principles of interference, diffraction, and superposition remain integral to modern physics and engineering.
          </p>
        </div>
      )}
    </section>

    <section className="topic">
      <h2>Astronomy and Celestial Mechanics</h2>
      <div className="section-header">
      <button 
        className="expand-button" 
        onClick={() => toggleSection("astronomy")}
      >
        {expandedSections.astronomy ? "Collapse" : "Expand"}
      </button>
      </div>
      {expandedSections.astronomy && (
        <div className="section-content">
          <p>
            The study of celestial objects and their motions has fascinated humanity for millennia. During the era of classical physics, revolutionary insights into the mechanics of the heavens emerged, primarily through the work of Johannes Kepler, Galileo Galilei, and Sir Isaac Newton. Their contributions established the mathematical principles that govern planetary motion and universal gravitation.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Nikolaus_Kopernikus_MOT.jpg/1280px-Nikolaus_Kopernikus_MOT.jpg" />
          <h3>Historical Milestones:</h3>
          <ul>
            <li>
              <strong>1543:</strong> Nicolaus Copernicus published <i>De revolutionibus orbium coelestium</i>, proposing a heliocentric model of the solar system.
            </li>
            <li>
              <strong>1609–1619:</strong> Johannes Kepler formulated his three laws of planetary motion, describing the elliptical orbits of planets.
            </li>
            <li>
              <strong>1610:</strong> Galileo Galilei observed celestial phenomena with his telescope, including the moons of Jupiter and phases of Venus, providing evidence for the heliocentric model.
            </li>
            <li>
              <strong>1687:</strong> Isaac Newton's <i>Principia Mathematica</i> presented the law of universal gravitation, unifying terrestrial and celestial mechanics.
            </li>
          </ul>
          <h3>Kepler's Laws of Planetary Motion:</h3>
          <ul>
            <li>
              <strong>First Law (Law of Ellipses):</strong> Planets move in elliptical orbits with the Sun at one focus.
            </li>
            <li>
              <strong>Second Law (Law of Equal Areas):</strong> A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time, reflecting variations in orbital speed.
            </li>
            <li>
              <strong>Third Law (Harmonic Law):</strong> The square of a planet's orbital period is proportional to the cube of the semi-major axis of its orbit.
            </li>
          </ul>
          <h3>Newton's Contributions to Celestial Mechanics:</h3>
          <p>
            Newton's law of universal gravitation explained the forces governing planetary motion and their relation to the mass of celestial bodies. His work provided mathematical tools to:
          </p>
          <ul>
            <li>
              Predict the motion of planets and comets, such as Halley's Comet, whose periodicity was confirmed by Edmund Halley using Newton's principles.
            </li>
            <li>
              Explain tidal phenomena due to gravitational interactions between the Earth, Moon, and Sun.
            </li>
            <li>
              Model the stability of planetary orbits in the solar system.
            </li>
          </ul>
          <h3>Galileo's Astronomical Discoveries:</h3>
          <p>
            Galileo's use of the telescope opened new vistas in astronomy. He made groundbreaking observations, including:
          </p>
          <ul>
            <li>
              The four largest moons of Jupiter (now known as the Galilean moons), proving that not all celestial bodies orbit the Earth.
            </li>
            <li>
              The phases of Venus, supporting the heliocentric model over the geocentric model.
            </li>
            <li>
              The rugged surface of the Moon, challenging the notion of celestial perfection.
            </li>
          </ul>
          <h3>Applications and Legacy:</h3>
          <p>
            The work in astronomy and celestial mechanics during the classical era laid the groundwork for modern astrophysics and space exploration. Key applications include:
          </p>
          <ul>
            <li>
              Navigation: The principles of celestial mechanics guided the development of tools like the sextant and modern GPS systems.
            </li>
            <li>
              Space Missions: Understanding orbital mechanics enabled the launch of artificial satellites and interplanetary probes.
            </li>
            <li>
              Predictive Models: Computational models of planetary motion help predict celestial events such as eclipses and meteor showers.
            </li>
          </ul>
          <p>
            The principles of classical celestial mechanics remain fundamental, even as relativistic corrections are applied in high-precision contexts, such as GPS technology and spacecraft navigation.
          </p>
        </div>
      )}
    </section>
  </main>

      <footer className="classical-physics-footer">
        <p>
          The classical era of physics laid the groundwork for modern scientific
          disciplines and technological advancements, paving the way for quantum
          mechanics and relativity.
        </p>
        <Link to="/science/physical/physics" className="back-link">
          Back to Physics
        </Link>
      </footer>
    </div>
  );
};

export default ClassicalPhysics;
