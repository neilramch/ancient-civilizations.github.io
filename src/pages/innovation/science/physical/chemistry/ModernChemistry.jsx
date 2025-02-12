import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const ModernChemistry = () => {
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
        <h1>The Birth of Modern Chemistry</h1>
        <p>
          Discover how the mystical roots of alchemy gave way to the rigorous scientific discipline of modern chemistry. From the law of conservation of mass to the identification of elements, explore the revolutionary work of pioneers like Antoine Lavoisier, Robert Boyle, and Dmitri Mendeleev.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Robert Boyle: The Sceptical Chymist</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("robertBoyle")}
            >
              {expandedSections.robertBoyle ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.robertBoyle && (
            <div className="section-content">
              <p>
                Robert Boyle (1627–1691) is often called the "Father of Modern Chemistry" for his emphasis on experimentation and rejection of traditional alchemical theories.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sceptical_chymist_1661_Boyle_Title_page_AQ18_%283%29.jpg/1280px-Sceptical_chymist_1661_Boyle_Title_page_AQ18_%283%29.jpg" />
              <p className="caption">Title page from The sceptical chymist : or Chymico-physical doubts and paradoxes, touching the spagyrist's principles commonly call'd hypostatical, as they are wont to be propos'd and defended by the generality of alchymists.</p>
              <h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>Publication of <i>The Sceptical Chymist</i> (1661):</strong> Robert Boyle challenged the prevailing theories of Aristotle's four classical elements (earth, water, air, fire) and the alchemical notion of transmutation. Instead, he proposed that matter is composed of "corpuscles" (early ideas of atoms) that combine to form chemical substances. This work marked a significant departure from mystical alchemy toward empirical and systematic chemistry, earning Boyle recognition as one of the founders of modern chemistry.
  </li>
  <li>
    <strong>Boyle's Law:</strong> Boyle formulated a foundational principle of gas behavior, stating that the pressure of a gas is inversely proportional to its volume when temperature and the amount of gas are constant:
    <br />
    <i>P ∝ 1/V</i> or <i>P × V = constant</i>.
    <ul>
      <li>This law was a cornerstone in the study of gases and provided a mathematical relationship that advanced the understanding of physical chemistry.</li>
      <li>Boyle's experimental work on gases laid the groundwork for later developments in thermodynamics and kinetic theory.</li>
    </ul>
  </li>
  <li>
    <strong>Advocacy for Systematic and Empirical Methods:</strong> Boyle emphasized the importance of experimentation, observation, and documentation in scientific inquiry. He rejected speculative reasoning in favor of reproducible experiments, setting the stage for the scientific method as a standard practice in chemistry and other sciences.
  </li>
  <li>
    <strong>Distinction Between Chemistry and Alchemy:</strong> Boyle worked to separate chemistry from alchemy, focusing on the practical and testable aspects of chemical reactions and substances, rather than mystical or metaphysical goals like the philosopher's stone.
  </li>
  <li>
    <strong>Contributions to Experimental Techniques:</strong> Boyle improved laboratory apparatus and techniques, particularly in the study of gases, using the air pump (developed with Robert Hooke) to conduct groundbreaking experiments on air pressure and vacuum.
  </li>
</ul>
<p>
  Robert Boyle’s work was instrumental in transitioning from alchemical traditions to modern chemistry. His emphasis on empirical research and his rejection of untested theories paved the way for systematic study, making him a central figure in the Scientific Revolution and the evolution of the chemical sciences.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Antoine Lavoisier: The Father of Modern Chemistry</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("antoineLavoisier")}
            >
              {expandedSections.antoineLavoisier ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.antoineLavoisier && (
            <div className="section-content">
              <p>
                Antoine Lavoisier (1743–1794) revolutionized chemistry by introducing quantitative methods and redefining our understanding of matter and chemical reactions.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lavoisier_explaining_to_his_wife_the_result_of_his_experimen_Wellcome_V0018151.jpg/1280px-Lavoisier_explaining_to_his_wife_the_result_of_his_experimen_Wellcome_V0018151.jpg" />
              <p className="caption">TPortrait of Lavoisier explaining to his wife the result of his experiments on air by Ernest Board</p>
              <h3>Key Achievements:</h3>
<ul>
  <li>
    <strong>Law of Conservation of Mass:</strong> Antoine Lavoisier established the fundamental principle that mass is neither created nor destroyed in chemical reactions. This discovery was foundational for modern chemistry, providing a basis for stoichiometry and the systematic study of chemical reactions. It emphasized the need for accurate measurement in experiments.
  </li>
  <li>
    <strong>Identification and Naming of Elements:</strong> Lavoisier identified and named oxygen and hydrogen, pivotal elements in chemical reactions. His work demonstrated that oxygen was essential for combustion and respiration, fundamentally altering the understanding of these processes. He also contributed to the classification of elements, distinguishing between metals and non-metals.
  </li>
  <li>
    <strong>Refutation of the Phlogiston Theory:</strong> Lavoisier disproved the long-standing phlogiston theory, which suggested that a mysterious substance called phlogiston was released during combustion. Through meticulous experiments, he demonstrated that combustion involved the combination of a substance with oxygen, revolutionizing the understanding of chemical processes.
  </li>
  <li>
    <strong>Publication of <i>Traité Élémentaire de Chimie</i> (1789):</strong> Lavoisier authored the first modern chemical textbook, *Traité Élémentaire de Chimie* (*Elementary Treatise on Chemistry*). This work introduced:
    <ul>
      <li>A clear and systematic nomenclature for chemical compounds, which forms the basis of modern chemical naming conventions.</li>
      <li>The use of precise measurements and standardized procedures in chemical research.</li>
      <li>The presentation of chemistry as a coherent scientific discipline, laying the foundation for its advancement in the 19th century.</li>
    </ul>
  </li>
  <li>
    <strong>Role in Scientific Revolution:</strong> Lavoisier's work was instrumental in transitioning chemistry from a qualitative, alchemical tradition to a quantitative and systematic science. He emphasized the use of accurate measurements, experimentation, and logical analysis.
  </li>
</ul>
<p>
  Antoine Lavoisier is often regarded as the "Father of Modern Chemistry" for his groundbreaking contributions that redefined the field. His principles and methods continue to underpin the study of chemical science and its applications across industries and research.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Dmitri Mendeleev and the Periodic Table</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("dmitriMendeleev")}
            >
              {expandedSections.dmitriMendeleev ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.dmitriMendeleev && (
            <div className="section-content">
              <p>
                Dmitri Mendeleev (1834–1907), a Russian chemist, created the first widely accepted periodic table, organizing elements based on their atomic mass and chemical properties.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Mendelejevs_periodiska_system_1871.png" />
              <p className="caption">Mendeleev's 1871 periodic table</p>
              <h3>The Periodic Table:</h3>
<ul>
  <li>
    <strong>Published in 1869:</strong> Dmitri Mendeleev introduced the first widely recognized periodic table, organizing known elements based on their atomic masses and chemical properties. Unlike earlier attempts, Mendeleev's table:
    <ul>
      <li>Left deliberate gaps for undiscovered elements, predicting their properties with remarkable accuracy.</li>
      <li>Provided a systematic framework for understanding the relationships between elements, highlighting periodic trends such as valency, reactivity, and atomic structure.</li>
    </ul>
  </li>
  <li>
    <strong>Organization into Groups and Periods:</strong> Mendeleev arranged elements into vertical groups and horizontal periods, reflecting their recurring properties. For example:
    <ul>
      <li>Elements in the same group exhibit similar chemical behavior due to their valence electron configurations.</li>
      <li>The periodic table revealed trends such as increasing atomic size down a group and decreasing atomic radius across a period.</li>
    </ul>
    This organization illuminated the periodic nature of chemical elements, tying their properties to atomic structure.
  </li>
  <li>
    <strong>Predictive Power:</strong> Mendeleev’s periodic table accurately predicted the existence and properties of several elements before they were discovered, including:
    <ul>
      <li><strong>Gallium:</strong> Discovered in 1875, its properties matched Mendeleev's prediction for "eka-aluminum."</li>
      <li><strong>Germanium:</strong> Discovered in 1886, it aligned with the predicted properties of "eka-silicon."</li>
    </ul>
    These confirmations validated the periodic table as a powerful scientific tool.
  </li>
  <li>
    <strong>Later Developments:</strong> Subsequent refinements, such as Henry Moseley’s work in 1913, reordered elements by atomic number instead of atomic mass, resolving discrepancies and solidifying the periodic table as a cornerstone of modern chemistry.
  </li>
</ul>
<p>
  The periodic table is not just a classification system but a predictive framework that has guided countless discoveries in chemistry, physics, and materials science. Its design continues to evolve with the discovery of new elements, yet it remains one of the most iconic achievements in scientific history.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>The Rise of Analytical Chemistry</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("analyticalChemistry")}
            >
              {expandedSections.analyticalChemistry ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.analyticalChemistry && (
            <div className="section-content">
              <p>
                Analytical chemistry emerged in the 19th century, focusing on the qualitative and quantitative analysis of substances. This field revolutionized industrial processes and medical science.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/1_MV_accelerator_mass_spectrometer.jpg" />
              <p className="caption">An accelerator mass spectrometer used for radiocarbon dating and other analysis.</p>
              <h3>Key Developments:</h3>
<ul>
  <li>
    <strong>Development of Analytical Techniques:</strong> The evolution of analytical chemistry introduced precise methods for quantifying and identifying chemical substances, including:
    <ul>
      <li><strong>Titration:</strong> A volumetric method for determining the concentration of a solution by reacting it with a known reagent.</li>
      <li><strong>Gravimetric Analysis:</strong> A technique that measures substances by weight, often used to determine the composition of mixtures or the purity of compounds.</li>
      <li><strong>Spectroscopy:</strong> The study of the interaction between matter and electromagnetic radiation, enabling the identification and quantification of elements and compounds. Key advancements include atomic absorption spectroscopy (AAS), mass spectrometry (MS), and nuclear magnetic resonance (NMR).</li>
    </ul>
  </li>
  <li>
    <strong>Atomic Theory by John Dalton (1803):</strong> Dalton's atomic theory revolutionized chemistry by proposing that:
    <ul>
      <li>Matter consists of indivisible atoms.</li>
      <li>Atoms of a given element are identical in mass and properties.</li>
      <li>Atoms combine in fixed ratios to form compounds, explaining the laws of chemical combination.</li>
    </ul>
    This theory provided a theoretical foundation for understanding chemical reactions and laid the groundwork for modern analytical chemistry.
  </li>
  <li>
    <strong>Applications Across Disciplines:</strong> Analytical chemistry has become indispensable in various fields, including:
    <ul>
      <li><strong>Pharmaceuticals:</strong> Ensuring drug purity, stability, and efficacy through rigorous chemical testing and validation methods.</li>
      <li><strong>Metallurgy:</strong> Analyzing metals and alloys for industrial applications, such as quality control in manufacturing and refining processes.</li>
      <li><strong>Environmental Science:</strong> Monitoring pollutants, assessing air and water quality, and detecting trace contaminants to protect ecosystems and public health.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Analytical chemistry remains a cornerstone of chemical research and industry, providing the tools necessary to explore the composition, structure, and properties of matter. Its advancements drive innovation in medicine, technology, and environmental sustainability, ensuring precision and reliability in scientific and industrial processes.
</p>

            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The birth of modern chemistry marked a shift from mystical alchemy to a rigorous, empirical science. The discoveries of pioneers like Boyle, Lavoisier, and Mendeleev continue to influence chemistry and related disciplines to this day.
        </p>
        <Link to="/science/physical/chemistry" className="back-link">
          Back to Chemistry
        </Link>
      </footer>
    </div>
  );
};

export default ModernChemistry;
