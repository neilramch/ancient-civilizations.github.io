import React, { useState } from "react";
import "./NineteenthCenturyPhysics.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const NineteenthCenturyPhysics = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="nineteenth-century-physics-container">
      <header className="nineteenth-century-physics-header">
        <h1>19th Century Physics: The Age of Energy and Fields</h1>
        <p>
          The 19th century marked a transformative era in physics, characterized by revolutionary advancements in thermodynamics, electromagnetism, and atomic theory, laying the groundwork for modern physics.
        </p>
      </header>

      <main className="nineteenth-century-physics-main">
        <section className="topic">
          <div className="section-header">
            <h2>Thermodynamics and the Laws of Heat</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("thermodynamics")}
            >
              {expandedSections.thermodynamics ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.thermodynamics && (
            <div className="section-content">
                

              <p>
                Thermodynamics emerged as a cornerstone of 19th-century physics, focusing on the relationships between heat, energy, and work. The study was propelled by the Industrial Revolution and the invention of heat engines.
              </p>

              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Savery-engine.jpg" />
                <p className="caption">The 1698 Savery Engine – the world's first commercially important steam engine: built by Thomas Savery</p>

              <h3>Historical Milestones:</h3>
              <ul>
                <li>
                  <strong>1824:</strong> Sadi Carnot published <i>Reflections on the Motive Power of Fire</i>, introducing the Carnot cycle and laying the foundation for the second law of thermodynamics.
                </li>
                <li>
                  <strong>1850s:</strong> Rudolf Clausius and William Thomson (Lord Kelvin) formalized the laws of thermodynamics, introducing concepts like entropy and absolute temperature.
                </li>
                <li>
                  <strong>1870s:</strong> James Clerk Maxwell and Ludwig Boltzmann advanced statistical mechanics, explaining the behavior of gases at the molecular level.
                </li>
              </ul>
              <h3>The Laws of Thermodynamics:</h3>
              <ul>
                <li>
                  <strong>First Law:</strong> Energy cannot be created or destroyed, only transformed. This principle unified heat and mechanical work as forms of energy.
                </li>
                <li>
                  <strong>Second Law:</strong> Entropy, or disorder, in an isolated system always increases over time, dictating the direction of natural processes.
                </li>
                <li>
                  <strong>Third Law:</strong> As a system approaches absolute zero, its entropy approaches a minimum constant value.
                </li>
              </ul>
              <h3>Impact:</h3>
              <p>
                Thermodynamics revolutionized engineering and technology, leading to the development of more efficient engines, refrigeration systems, and a deeper understanding of energy conservation.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Electromagnetism and Maxwell's Equations</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("electromagnetism")}
            >
              {expandedSections.electromagnetism ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.electromagnetism && (
            <div className="section-content">
              <p>
                The unification of electricity and magnetism into a single theory was one of the most significant achievements of 19th-century physics, spearheaded by James Clerk Maxwell.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/A_Treatise_on_Electricity_and_Magnetism_Volume_2_003.jpg" />
              <p className="caption">Cover of A Treatise on Electricity and Magnetism</p>

              <h3>Key Developments:</h3>
              <ul>
                <li>
                  <strong>1820:</strong> Hans Christian Ørsted discovered that an electric current generates a magnetic field.
                </li>
                <li>
                  <strong>1831:</strong> Michael Faraday demonstrated electromagnetic induction, showing that a changing magnetic field induces an electric current.
                </li>
                <li>
                  <strong>1861–1862:</strong> Maxwell published his equations, describing the interactions of electric and magnetic fields and predicting electromagnetic waves.
                </li>
              </ul>
              <h3>Maxwell's Equations:</h3>
              <ul>
                <li>
                  <strong>Gauss's Law:</strong> Describes the distribution of electric charge and the resulting electric field.
                </li>
                <li>
                  <strong>Gauss's Law for Magnetism:</strong> States that magnetic monopoles do not exist.
                </li>
                <li>
                  <strong>Faraday's Law:</strong> Explains how a changing magnetic field generates an electric field.
                </li>
                <li>
                  <strong>Ampère-Maxwell Law:</strong> Describes how a changing electric field or current generates a magnetic field.
                </li>
              </ul>
              <h3>Applications:</h3>
              <p>
                Maxwell's equations led to the understanding of light as an electromagnetic wave and inspired technological advancements in communication, such as the telegraph, radio, and later wireless technology.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Atomic Theory and Kinetic Theory of Gases</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("atomicTheory")}
            >
              {expandedSections.atomicTheory ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.atomicTheory && (
            <div className="section-content">            
              <p>
                The 19th century saw the revival and advancement of atomic theory, with scientists proposing that matter is composed of discrete, indivisible particles called atoms.
              </p>

              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/HYDRODYNAMICA%2C_Danielis_Bernoulli.png" />
                <p className="caption">Hydrodynamica front cover</p>

              <h3>Key Developments:</h3>
              <ul>
                <li>
                  <strong>1803:</strong> John Dalton formulated the first modern atomic theory, describing atoms as indivisible particles that combine in fixed ratios to form compounds.
                </li>
                <li>
                  <strong>1869:</strong> Dmitri Mendeleev published the periodic table, organizing elements based on their atomic weights and properties.
                </li>
                <li>
                  <strong>1877:</strong> Ludwig Boltzmann developed the kinetic theory of gases, explaining macroscopic properties like temperature and pressure in terms of molecular motion.
                </li>
              </ul>
              <h3>Impact:</h3>
              <p>
                Atomic theory provided a framework for understanding chemical reactions and the properties of matter, while the kinetic theory laid the foundation for statistical mechanics and thermodynamics.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="nineteenth-century-physics-footer">
        <p>
          The 19th century ushered in an era of profound discoveries that bridged the gap between classical and modern physics, shaping our understanding of energy, matter, and fields.
        </p>
        <Link to="/science/physical/physics" className="back-link">
          Back to Physics
        </Link>
      </footer>
    </div>
  );
};

export default NineteenthCenturyPhysics;
