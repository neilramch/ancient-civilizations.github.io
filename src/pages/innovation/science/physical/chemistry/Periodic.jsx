import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const PeriodicTable = () => {
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
        <h1>The Periodic Table (1800 CE – 1900 CE)</h1>
        <p>
          Explore the discovery of elements and Dmitri Mendeleev's groundbreaking creation of the Periodic Table, which organized the fundamental building blocks of matter.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>The Discovery of Elements</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("discoveryOfElements")}
            >
              {expandedSections.discoveryOfElements ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.discoveryOfElements && (
            <div className="section-content">
              <p>
                The 19th century was marked by the systematic discovery and study of elements, setting the stage for the development of the periodic table.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Inscription_above_the_door%2C_birthplace_of_John_Dalton%2C_Eaglesfield_%28geograph_4245532%29.jpg/1280px-Inscription_above_the_door%2C_birthplace_of_John_Dalton%2C_Eaglesfield_%28geograph_4245532%29.jpg" />
              <p className="caption">Historical plaque marking birthplace of John Dalton</p>
              <h3>Key Discoveries:</h3>
<ul>
  <li>
    <strong>1808: John Dalton’s Atomic Theory:</strong> Dalton proposed that all matter is composed of indivisible atoms, which combine in fixed ratios to form compounds. Key principles of his theory included:
    <ul>
      <li>Atoms of a given element are identical in mass and properties, while atoms of different elements differ.</li>
      <li>Chemical reactions involve the rearrangement of atoms, but the atoms themselves are not created or destroyed.</li>
      <li>This theory explained the laws of conservation of mass, definite proportions, and multiple proportions, providing a foundation for modern chemistry.</li>
    </ul>
  </li>
  <li>
    <strong>1817: Johann Wolfgang Döbereiner’s Triads:</strong> Döbereiner observed groups of three elements ("triads") with similar chemical properties and identified a relationship between their atomic weights:
    <ul>
      <li>The atomic weight of the middle element in a triad was approximately the average of the other two.</li>
      <li>For example, lithium, sodium, and potassium formed a triad with similar reactivity and progressive atomic weights.</li>
    </ul>
    This work hinted at periodic trends, paving the way for the development of the periodic table.
  </li>
  <li>
    <strong>1860: Karlsruhe Congress:</strong> This pivotal meeting of chemists standardized atomic weights and clarified the distinction between atoms and molecules. Key outcomes included:
    <ul>
      <li>Adoption of Cannizzaro’s method for determining atomic weights, which resolved inconsistencies in experimental data.</li>
      <li>Establishment of a systematic approach to studying elements, which directly influenced Mendeleev’s periodic table.</li>
    </ul>
  </li>
</ul>

<p>
  These discoveries laid the groundwork for understanding chemical relationships and periodic patterns. Dalton’s atomic theory provided a theoretical framework, Döbereiner’s triads introduced early evidence of periodicity, and the Karlsruhe Congress unified scientific understanding, enabling the systematic study of elements that culminated in the periodic table.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Dmitri Mendeleev and the Creation of the Periodic Table</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("mendeleev")}
            >
              {expandedSections.mendeleev ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.mendeleev && (
            <div className="section-content">
              <p>
                Dmitri Mendeleev (1834–1907), a Russian chemist, is celebrated for creating the first widely recognized periodic table in 1869.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/드미트리_멘델레예프.jpg/1280px-드미트리_멘델레예프.jpg" />
              <p className="caption"></p>
              <h3>Mendeleev's Approach:</h3>
              <ul>
  <li>
    <strong>Organized Elements by Atomic Weight:</strong> Dmitri Mendeleev arranged elements in order of increasing atomic weight, grouping them by similar chemical properties. This organization revealed recurring patterns, or periodic trends, such as valency and reactivity.
    <ul>
      <li>For example, alkali metals like lithium, sodium, and potassium were grouped together due to their similar reactivity with water and formation of +1 ions.</li>
    </ul>
  </li>
  <li>
    <strong>Predicted Undiscovered Elements:</strong> Mendeleev left gaps in his table for elements that had not yet been discovered, boldly predicting their existence and properties. Examples include:
    <ul>
      <li><strong>Gallium (eka-aluminum):</strong> Discovered in 1875, its density and melting point matched Mendeleev’s predictions.</li>
      <li><strong>Scandium (eka-boron):</strong> Discovered in 1879, confirming Mendeleev’s forecasted atomic weight and oxide formula.</li>
      <li><strong>Germanium (eka-silicon):</strong> Discovered in 1886, with properties aligning closely to those Mendeleev had detailed years earlier.</li>
    </ul>
    These validations underscored the predictive power of his periodic table.
  </li>
  <li>
    <strong>Corrected Atomic Weight Inaccuracies:</strong> Mendeleev adjusted atomic weights when experimental data suggested inconsistencies with periodic trends. For example:
    <ul>
      <li>He corrected the placement of iodine and tellurium, prioritizing chemical properties over strict atomic weight order, an insight later supported by the discovery of isotopes.</li>
    </ul>
    This approach demonstrated his commitment to the periodic table as a functional tool rather than a rigid structure.
  </li>
</ul>
<p>
  Mendeleev's periodic table not only provided a systematic arrangement of known elements but also laid the foundation for modern chemistry. The discovery of elements like gallium (1875), scandium (1879), and germanium (1886) validated his predictions and demonstrated the table's power as a predictive and organizing tool in science. Mendeleev’s work exemplified the application of scientific intuition and empirical observation to uncover fundamental principles of nature.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Key Features of the Periodic Table</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("keyFeatures")}
            >
              {expandedSections.keyFeatures ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.keyFeatures && (
            <div className="section-content">
              <p>
                The periodic table is a powerful tool for understanding the properties and relationships of elements.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Affinity-table.jpg" />
              <p className="caption">Geoffroy's 1718 Affinity Table: at the head of each column is a chemical species with which all the species below can combine. Some historians have defined this table as being the start of the chemical revolution.</p>
              <ul>
  <li>
    <strong>Periods:</strong> The horizontal rows of the periodic table represent elements arranged in order of increasing atomic number. Key features include:
    <ul>
      <li>The gradual change in chemical and physical properties across a period due to increasing nuclear charge and electron configuration.</li>
      <li>Trends such as decreasing atomic radius and increasing ionization energy and electronegativity from left to right.</li>
      <li>Elements at the end of each period (noble gases) are chemically inert, reflecting a filled valence shell.</li>
    </ul>
  </li>
  <li>
    <strong>Groups:</strong> The vertical columns contain elements with similar chemical properties due to their shared valence electron configurations. Important aspects include:
    <ul>
      <li>Group 1 (Alkali Metals): Highly reactive metals that form +1 ions and react vigorously with water.</li>
      <li>Group 17 (Halogens): Reactive nonmetals that form salts when combined with metals.</li>
      <li>Group 18 (Noble Gases): Stable, inert gases with full valence electron shells.</li>
      <li>Transition metals and lanthanides/actinides exhibit unique properties such as variable oxidation states and magnetic behavior.</li>
    </ul>
  </li>
  <li>
    <strong>Periodic Law:</strong> First formulated by Dmitri Mendeleev and refined by later discoveries, this principle states that the properties of elements are a periodic function of their atomic numbers. Key implications include:
    <ul>
      <li>Elements exhibit recurring patterns in properties, such as reactivity, ionization energy, and electronegativity, at regular intervals (periodically).</li>
      <li>This law underpins the organization of the table and its ability to predict the behavior of elements and their compounds.</li>
    </ul>
  </li>
</ul>
<p>
  These structural features of the periodic table—periods, groups, and periodic law—make it an indispensable resource in chemistry and related fields. It serves as both a reference and a predictive tool, enabling scientists to uncover new relationships, design experiments, and develop innovative materials and technologies.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Legacy of the Periodic Table</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("legacy")}
            >
              {expandedSections.legacy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.legacy && (
            <div className="section-content">
              <p>
                The periodic table remains one of the most significant achievements in the history of science. It has:
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Colour_18-col_PT_with_labels.png/1280px-Colour_18-col_PT_with_labels.png" />
              <p className="caption">Periodic table of the chemical elements showing the most or more commonly named sets of elements (in periodic tables), and a traditional dividing line between metals and nonmetals. The f-block actually fits between groups 2 and 3; it is usually shown at the foot of the table to save horizontal space.</p>
              <ul>
  <li>
    <strong>Discovery of New Elements:</strong> The periodic table has guided the identification of natural and synthetic elements:
    <ul>
      <li><strong>Technetium:</strong> The first artificially produced element (1937), filling a predicted gap in the periodic table.</li>
      <li><strong>Oganesson:</strong> A synthetic element discovered in 2002, completing the seventh period of the periodic table.</li>
      <li>The periodic table continues to inspire the search for superheavy elements, extending our understanding of atomic structure and nuclear stability.</li>
    </ul>
  </li>
  <li>
    <strong>Predictive Tool for Chemical Behavior:</strong> By organizing elements based on atomic number and periodic trends, the table allows scientists to:
    <ul>
      <li>Predict chemical reactivity, bonding patterns, and physical properties.</li>
      <li>Anticipate the behavior of elements in new compounds and reactions, driving innovation in pharmaceuticals, industrial chemistry, and materials science.</li>
    </ul>
    This predictive power has been pivotal in developing new materials and understanding complex chemical systems.
  </li>
  <li>
    <strong>Influence Across Disciplines:</strong> The periodic table’s principles extend beyond chemistry, impacting:
    <ul>
      <li><strong>Physics:</strong> Insights into atomic structure, quantum mechanics, and nuclear physics.</li>
      <li><strong>Biology:</strong> Understanding the role of trace elements and metals in biological systems, such as enzymes and DNA stability.</li>
      <li><strong>Materials Science:</strong> Development of alloys, semiconductors, and advanced materials with tailored properties.</li>
    </ul>
    Its interdisciplinary relevance underscores its role as a unifying framework in science.
  </li>
</ul>
<p>
  Today, the periodic table is more than a tool for chemists—it is a universal symbol of scientific achievement. Its ability to synthesize knowledge across generations and disciplines reflects the enduring power of human curiosity and ingenuity.
</p>

            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The creation of the periodic table transformed chemistry into a systematic science, enabling the discovery and understanding of the elements that compose our universe.
        </p>
        <Link to="/science/physical/chemistry" className="back-link">
          Back to Chemistry
        </Link>
      </footer>
    </div>
  );
};

export default PeriodicTable;
