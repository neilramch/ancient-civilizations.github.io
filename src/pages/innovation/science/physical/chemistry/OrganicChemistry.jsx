import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const OrganicChemistry = () => {
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
        <h1>Organic Chemistry (1930 CE – Present)</h1>
        <p>
          Dive into the chemistry of life, studying carbon-based compounds and their crucial role in biology, medicine, and industry.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>The Foundations of Organic Chemistry</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("foundations")}
            >
              {expandedSections.foundations ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.foundations && (
            <div className="section-content">
              <p>
                Organic chemistry began as the study of compounds derived from living organisms. Early chemists believed these substances possessed a "vital force" absent in inorganic compounds.
              </p>
              <h3>Key Historical Milestones:</h3>
              <ul>
                <li>
                  <strong>1828:</strong> Friedrich Wöhler synthesized urea from ammonium cyanate, disproving the "vital force" theory and demonstrating that organic compounds could be made artificially.
                </li>
                <li>
                  <strong>19th Century:</strong> The development of structural formulas by Kekulé and Couper laid the groundwork for understanding molecular structures.
                </li>
                <li>
                  <strong>1930s:</strong> Advances in spectroscopy, such as infrared and NMR (nuclear magnetic resonance), revolutionized the identification of organic compounds.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Friedrich_Wöhler_Litho.jpg"
                alt="Portrait of Friedrich Wöhler"
              />
              <p>
                These foundations marked the beginning of a field that would profoundly impact multiple disciplines, from biology to materials science.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Organic Chemistry and Biology</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("biology")}
            >
              {expandedSections.biology ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.biology && (
            <div className="section-content">
              <p>
                Organic chemistry plays a critical role in biology, particularly in understanding the molecular basis of life.
              </p>
              <h3>Key Discoveries:</h3>
              <ul>
                <li>
                  <strong>1953:</strong> James Watson and Francis Crick discovered the double-helix structure of DNA, aided by Rosalind Franklin's X-ray diffraction data. Organic chemistry helped explain the molecular interactions governing heredity.
                </li>
                <li>
                  <strong>1960s:</strong> Advances in enzyme chemistry revealed how proteins catalyze biochemical reactions.
                </li>
                <li>
                  <strong>1980s–2000s:</strong> Development of synthetic organic methods enabled the production of pharmaceuticals like penicillin, statins, and antivirals.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/DNA_animation.gif"
                alt="Double Helix Structure of DNA"
              />
              <p>
                These breakthroughs bridged organic chemistry and molecular biology, leading to transformative technologies like genetic engineering and CRISPR.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Industrial Applications</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("industrial")}
            >
              {expandedSections.industrial ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.industrial && (
            <div className="section-content">
              <p>
                The industrial impact of organic chemistry is unparalleled, from plastics to renewable energy.
              </p>
              <h3>Key Developments:</h3>
              <ul>
                <li>
                  <strong>Plastics:</strong> Synthetic polymers like polyethylene and polypropylene revolutionized manufacturing and daily life.
                </li>
                <li>
                  <strong>Fuels:</strong> Organic compounds form the basis of fossil fuels and biofuels, critical to global energy systems.
                </li>
                <li>
                  <strong>Green Chemistry:</strong> Recent advancements focus on sustainable practices, including biodegradable plastics and renewable feedstocks.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Say_no_to_polythene._Sign._Nako%2C_H.P._India.jpg"
                alt="Say no to polythene. Sign. Nako, Himachal Pradesh, India."
              />
              <p>
                Organic chemistry's innovations continue to shape industries, addressing challenges like sustainability and resource management.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Modern Frontiers</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("modernFrontiers")}
            >
              {expandedSections.modernFrontiers ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.modernFrontiers && (
            <div className="section-content">
              <p>
                Cutting-edge research in organic chemistry explores new materials, drugs, and sustainable technologies.
              </p>
              <h3>Current Research Areas:</h3>
              <ul>
                <li>
                  <strong>Nanotechnology:</strong> Designing carbon-based nanostructures like graphene and carbon nanotubes.
                </li>
                <li>
                  <strong>Medicinal Chemistry:</strong> Creating targeted therapies for cancer, autoimmune diseases, and genetic disorders.
                </li>
                <li>
                  <strong>Organic Electronics:</strong> Developing organic semiconductors for flexible displays and solar cells.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Graphen.jpg"
                alt="The ideal crystalline structure of graphene is a hexagonal grid."
              />
              <p>
                These frontiers highlight the dynamic nature of organic chemistry as it addresses some of the world's most pressing challenges.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          Organic chemistry continues to revolutionize science, bridging biology, industry, and technology to create a more sustainable and innovative future.
        </p>
        <Link to="/science/physical/chemistry" className="back-link">
          Back to Chemistry
        </Link>
      </footer>
    </div>
  );
};

export default OrganicChemistry;
