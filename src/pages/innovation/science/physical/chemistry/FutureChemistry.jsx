import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const FutureChemistry = () => {
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
        <h1>The Future of Chemistry</h1>
        <p>
          Explore the cutting-edge advancements and research shaping the future of chemistry, from sustainable practices to breakthroughs in material science and medicine.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Sustainable Chemistry</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("sustainableChemistry")}
            >
              {expandedSections.sustainableChemistry ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.sustainableChemistry && (
            <div className="section-content">
              <p>
                Sustainability is at the heart of modern chemical research, focusing on reducing environmental impact and developing greener alternatives.
              </p>
              <h3>Key Areas:</h3>
              <ul>
                <li>
                  <strong>Green Synthesis:</strong> Developing chemical reactions that minimize waste and use renewable feedstocks.
                </li>
                <li>
                  <strong>Biodegradable Polymers:</strong> Creating materials that break down naturally to reduce plastic pollution.
                </li>
                <li>
                  <strong>Carbon Capture:</strong> Innovations in capturing and storing CO₂ to mitigate climate change.
                </li>
              </ul>
              <img
                src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/780xany/0/0/6/530006_d3su00217af2_hires_710314_crop.jpg"
                alt="Sustainable Chemistry Concepts"
              />
              <p>
                The shift toward sustainability is reshaping industries, encouraging the development of eco-friendly products and processes.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Advances in Material Science</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("materialScience")}
            >
              {expandedSections.materialScience ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.materialScience && (
            <div className="section-content">
              <p>
                Material science is driving innovation across industries, from lightweight composites for aerospace to superconductors and nanomaterials.
              </p>
              <h3>Emerging Materials:</h3>
              <ul>
                <li>
                  <strong>Graphene:</strong> A single layer of carbon atoms with exceptional strength and electrical conductivity.
                </li>
                <li>
                  <strong>Smart Materials:</strong> Materials that respond to stimuli like temperature, light, or pressure.
                </li>
                <li>
                  <strong>Metal-Organic Frameworks (MOFs):</strong> Porous materials with applications in gas storage and catalysis.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nobelpriset_i_fysik_2010.png/1280px-Nobelpriset_i_fysik_2010.png"
                alt="Graphene Structure"
              />
              <p>
                These advancements are paving the way for technologies like flexible electronics, renewable energy solutions, and advanced medical devices.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Breakthroughs in Medicinal Chemistry</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("medicinalChemistry")}
            >
              {expandedSections.medicinalChemistry ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.medicinalChemistry && (
            <div className="section-content">
              <p>
                Medicinal chemistry continues to revolutionize healthcare, focusing on designing drugs to combat diseases and improve quality of life.
              </p>
              <h3>Key Focus Areas:</h3>
              <ul>
                <li>
                  <strong>Targeted Therapies:</strong> Personalized medicine tailored to individual genetic profiles.
                </li>
                <li>
                  <strong>mRNA Technology:</strong> Building on the success of COVID-19 vaccines to address other diseases.
                </li>
                <li>
                  <strong>Antimicrobial Resistance:</strong> Developing new antibiotics to combat drug-resistant bacteria.
                </li>
              </ul>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Antibiotic_sensitivity_and_resistance.jpg/1280px-Antibiotic_sensitivity_and_resistance.jpg"
                alt="Antibiotic Resistance"
              />
              <p className="caption">
              Antibiotic resistance tests: Bacteria are streaked on dishes with white disks, each impregnated with a different antibiotic. Clear rings, such as those on the left, show that bacteria have not grown—indicating that these bacteria are not resistant. The bacteria on the right are fully resistant to three of seven and partially resistant to two of seven antibiotics tested.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Artificial Intelligence in Chemistry</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("aiInChemistry")}
            >
              {expandedSections.aiInChemistry ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.aiInChemistry && (
            <div className="section-content">
              <p>
                Artificial intelligence (AI) is transforming how chemical research is conducted, accelerating discovery and optimizing processes.
              </p>
              <h3>Applications:</h3>
              <ul>
                <li>
                  <strong>Drug Discovery:</strong> AI algorithms predict molecular interactions, speeding up the development of new drugs.
                </li>
                <li>
                  <strong>Materials Design:</strong> Identifying properties of new materials with desired characteristics.
                </li>
                <li>
                  <strong>Reaction Optimization:</strong> Automating chemical synthesis to improve efficiency and yield.
                </li>
              </ul>
              <img
                src="https://www.genengnews.com/wp-content/uploads/2024/04/CDS-91-1068x600.jpg"
                alt="AI in Drug Discovery"
              />
              <p>
                AI is redefining chemistry, enabling breakthroughs that were previously unimaginable.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The future of chemistry is bright, promising groundbreaking advancements that will shape the world for generations to come.
        </p>
        <Link to="/science/physical/chemistry" className="back-link">
          Back to Chemistry
        </Link>
      </footer>
    </div>
  );
};

export default FutureChemistry;
