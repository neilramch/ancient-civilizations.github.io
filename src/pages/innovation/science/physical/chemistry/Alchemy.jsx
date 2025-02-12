import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const Alchemy = () => {
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
        <h1>Alchemy: The Mystical Roots of Modern Chemistry</h1>
        <p>
          Alchemy, the precursor to modern chemistry, combined elements of philosophy, mysticism, and proto-scientific experimentation in the quest for ultimate knowledge.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>The Origins of Alchemy</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("origins")}
            >
              {expandedSections.origins ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.origins && (
            <div className="section-content">
              <p>
                Alchemy emerged around 300 BCE, blending Greek, Egyptian, Indian, and Chinese traditions. It sought to transform matter and unlock the secrets of existence.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Metal_production_in_Ancient_Middle_East.svg/1280px-Metal_production_in_Ancient_Middle_East.svg.png" />
              <p className="caption">Mining areas of the ancient Middle East. Boxes colors: arsenic is in brown, copper in red, tin in grey, iron in reddish-brown, gold in yellow, silver in white and lead in black. Yellow area stands for arsenic bronze, while grey area stands for tin bronze.</p>
              <ul>
  <li>
    <strong>Egyptian Influence:</strong> Ancient Egyptian practices greatly influenced the foundations of alchemy. Metallurgy, glassmaking, and dye-making provided early practical knowledge of chemical processes, such as smelting and pigment preparation. The symbolic association of metals with celestial bodies (e.g., gold with the sun) also originated in Egyptian culture, blending material practices with spiritual significance.
  </li>
  <li>
    <strong>Greek Philosophy:</strong> Greek philosophers like Empedocles and Aristotle introduced foundational concepts that shaped alchemical thought for centuries. 
    <ul>
      <li>Empedocles proposed the theory of the four classical elements—earth, water, air, and fire—as the building blocks of all matter.</li>
      <li>Aristotle expanded on this idea, associating the elements with qualities such as hot, cold, wet, and dry, forming the basis for early theories of material transformation and transmutation.</li>
    </ul>
    These ideas were later integrated into alchemical systems, merging philosophical inquiry with practical experimentation.
  </li>
  <li>
    <strong>Chinese Alchemy:</strong> Chinese alchemy developed independently of its Western counterpart and focused primarily on achieving immortality and spiritual enlightenment. Key features included:
    <ul>
      <li>The pursuit of the "elixir of life," a substance believed to grant eternal life or spiritual transcendence.</li>
      <li>The transmutation of base metals into gold, seen as a symbol of purity and perfection, though primarily for spiritual rather than material purposes.</li>
      <li>Connections to Taoist philosophy, emphasizing harmony between humanity and the cosmos and the balance of yin and yang energies.</li>
    </ul>
    Chinese alchemical practices contributed significantly to advancements in chemistry, pharmacology, and metallurgy.
  </li>
</ul>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Alchemy in the Islamic World</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("islamicAlchemy")}
            >
              {expandedSections.islamicAlchemy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.islamicAlchemy && (
            <div className="section-content">
              <p>
                During the Islamic Golden Age (8th–13th centuries), alchemy flourished, with scholars translating Greek texts and advancing the discipline through systematic experimentation.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Liebig_Company_Trading_Card_Ad_01.12.002_front.tif/lossy-page1-1280px-Liebig_Company_Trading_Card_Ad_01.12.002_front.tif.jpg" />
              <p className="caption">Artistic impression of Jabir and his master Jaʿfar al-Ṣādiq</p>
              <h3>Key Figures:</h3>
              <ul>
                <li>
                  <strong>Jābir ibn Hayyān (Geber):</strong> Known as the "Father of Chemistry," he introduced systematic experimentation and detailed procedures for distillation and crystallization.
                </li>
                <li>
                  <strong>Al-Razi (Rhazes):</strong> Developed techniques for refining substances and identified sulfuric acid and alcohol as key chemicals.
                </li>
              </ul>
              <h3>Contributions:</h3>
              <ul>
                <li>
                  Invented laboratory equipment such as alembics for distillation.
                </li>
                <li>
                  Pioneered methods for purifying metals and preparing acids.
                </li>
                <li>
                  Introduced chemical classifications based on properties like solubility and reactivity.
                </li>
              </ul>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>European Alchemy and the Philosopher's Stone</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("philosophersStone")}
            >
              {expandedSections.philosophersStone ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.philosophersStone && (
            <div className="section-content">
              <p>
                In medieval Europe, alchemists sought the legendary Philosopher's Stone, a substance believed to transform base metals into gold and grant eternal life.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Michael_Maier_Atalanta_Fugiens_Emblem_21.jpeg" />
              <p className="caption">Philosopher's stone as pictured in Atalanta Fugiens Emblem 21</p>
              <h3>Notable Alchemists:</h3>
              <ul>
                <li>
                  <strong>Nicholas Flamel:</strong> A 14th-century figure surrounded by myths of creating the Philosopher's Stone.
                </li>
                <li>
                  <strong>Paracelsus:</strong> Advocated for alchemy as a means to improve medicine and health.
                </li>
              </ul>
              <h3>Symbolism:</h3>
              <ul>
                <li>
                  Alchemical texts often used cryptic symbols and allegories to conceal knowledge.
                </li>
                <li>
                  The Philosopher's Stone symbolized spiritual enlightenment and the purification of the soul.
                </li>
              </ul>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Transition to Modern Chemistry</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("modernChemistry")}
            >
              {expandedSections.modernChemistry ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.modernChemistry && (
            <div className="section-content">
              <p>
                By the 17th century, alchemy began to evolve into modern chemistry, thanks to the work of scientists like Robert Boyle and Antoine Lavoisier.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lab_bench.jpg/1280px-Lab_bench.jpg" />
              <p className="caption">Laboratory, Institute of Biochemistry, University of Cologne in Germany</p>
              <h3>Robert Boyle (1627–1691):</h3>
              <ul>
                <li>
                  Emphasized experimentation and the scientific method in chemical studies.
                </li>
                <li>
                  Authored <i>The Sceptical Chymist</i>, challenging traditional alchemical concepts.
                </li>
              </ul>
              <h3>Antoine Lavoisier (1743–1794):</h3>
              <ul>
                <li>
                  Established the law of conservation of mass, transforming chemistry into a quantitative science.
                </li>
                <li>
                  Identified and named oxygen and hydrogen.
                </li>
              </ul>
              <p>
                These contributions marked the decline of mystical alchemy and the rise of empirical chemistry.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          Alchemy's legacy endures as the foundation of modern chemistry, blending the mystical and the scientific in humanity's quest to understand the material world.
        </p>
        <Link to="/science/physical/chemistry" className="back-link">
          Back to Chemistry
        </Link>
      </footer>
    </div>
  );
};

export default Alchemy;
