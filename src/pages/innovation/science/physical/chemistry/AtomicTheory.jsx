import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const AtomicTheory = () => {
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
        <h1>Atomic Theory (1900 CE – 1930 CE)</h1>
        <p>
          Understand the breakthroughs in atomic theory, from John Dalton's early ideas to Rutherford's nuclear model, that redefined our understanding of atoms and molecules.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Dalton's Atomic Theory</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("daltonTheory")}
            >
              {expandedSections.daltonTheory ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.daltonTheory && (
            <div className="section-content">
              <p>
                John Dalton (1766–1844) proposed the first modern atomic theory in the early 19th century, suggesting that all matter is composed of indivisible atoms.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/00/John_Dalton_by_Thomas_Phillips%2C_1835.jpg"
                alt="Portrait of John Dalton"
              />
              <p className="caption">Dalton in later life by Thomas Phillips, National Portrait Gallery, London (1835)</p>
              <ul>
  <li>
    <strong>Key Postulates of Dalton's Atomic Theory:</strong>
    <ul>
      <li>
        <strong>Atoms as Fundamental Units:</strong> Atoms are the smallest units of matter, indivisible and indestructible under chemical processes. This postulate introduced the idea that all matter is composed of discrete particles, challenging the continuous matter theories of earlier philosophers.
      </li>
      <li>
        <strong>Elemental Identity:</strong> All atoms of a given element are identical in mass and properties, while atoms of different elements differ in these attributes. This principle explained why elements exhibit consistent behavior in chemical reactions.
      </li>
      <li>
        <strong>Formation of Compounds:</strong> Compounds are formed by combinations of atoms in fixed, simple, whole-number ratios. This postulate provided the basis for understanding chemical formulas and the law of definite proportions.
      </li>
      <li>
        <strong>Chemical Reactions as Rearrangements:</strong> Chemical reactions involve the rearrangement of atoms into new combinations, without the creation or destruction of atoms. This principle aligned with the law of conservation of mass and explained how matter is conserved during chemical changes.
      </li>
    </ul>
  </li>
  <li>
    Dalton’s atomic theory revolutionized chemistry by providing a systematic framework for understanding chemical reactions and stoichiometry. Key contributions include:
    <ul>
      <li>
        <strong>Foundation for Stoichiometry:</strong> Dalton’s ideas allowed chemists to calculate reactant and product quantities based on atomic and molecular proportions.
      </li>
      <li>
        <strong>Support for Fundamental Laws:</strong> The theory explained the laws of conservation of mass, definite proportions, and multiple proportions, unifying experimental observations into a coherent model.
      </li>
      <li>
        <strong>Inspiration for Future Discoveries:</strong> While some aspects of Dalton’s theory (e.g., indivisible atoms) were later revised with the discovery of subatomic particles, his work laid the foundation for modern atomic theory and quantum mechanics.
      </li>
    </ul>
  </li>
</ul>
<p>
  Dalton’s atomic theory marked a turning point in the history of chemistry, shifting the field from qualitative descriptions to a quantitative, predictive science. It remains a cornerstone of chemical understanding, influencing both theoretical and applied chemistry.
</p>

              
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Thomson's Discovery of the Electron</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("thomsonElectron")}
            >
              {expandedSections.thomsonElectron ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.thomsonElectron && (
            <div className="section-content">
              <p>
                J.J. Thomson (1856–1940) discovered the electron in 1897, demonstrating that atoms are not indivisible.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/J.J_Thomson.jpg"
                alt="Portrait of J.J. Thomson"
              />
              <p className="caption">
                Thomson's work marked the first step toward understanding subatomic particles.
              </p>
              <h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>Discovery of the Electron:</strong> J.J. Thomson conducted experiments using cathode ray tubes and demonstrated that cathode rays consisted of negatively charged particles, later named electrons. Key observations and conclusions included:
    <ul>
      <li>Cathode rays were deflected by electric and magnetic fields, indicating they carried a negative charge.</li>
      <li>The mass-to-charge ratio of these particles was extremely small, suggesting they were much lighter than atoms.</li>
      <li>This discovery overturned the belief that atoms were indivisible, introducing the concept of subatomic particles.</li>
    </ul>
  </li>
  <li>
    <strong>Proposed the "Plum Pudding Model":</strong> Based on his findings, Thomson proposed a model of the atom in which:
    <ul>
      <li>Electrons were embedded within a positively charged "pudding," distributed evenly throughout the atom.</li>
      <li>The atom was electrically neutral overall, with the positive charge balancing the negative charge of the electrons.</li>
    </ul>
    While later replaced by Rutherford's nuclear model, the "plum pudding model" represented a significant step in understanding atomic structure.
  </li>
</ul>
<h3>Significance:</h3>
<p>
  J.J. Thomson's work marked the first discovery of a subatomic particle, fundamentally changing the understanding of matter. His identification of the electron paved the way for further exploration of atomic structure, including the discovery of the nucleus by Rutherford and the development of quantum mechanics. Thomson's contributions remain a cornerstone in the history of atomic physics.
</p>

             
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Rutherford's Nuclear Model</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("rutherfordModel")}
            >
              {expandedSections.rutherfordModel ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.rutherfordModel && (
            <div className="section-content">
              <p>
                Ernest Rutherford (1871–1937) challenged Thomson's model with his discovery of the atomic nucleus in 1911.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Statue_of_Ernest_Rutherford.JPG/1280px-Statue_of_Ernest_Rutherford.JPG"
                alt="Statue of young Ernest Rutherford"
              />
              <p className="caption">A statue of a young Ernest Rutherford at his memorial in Brightwater, New Zealand.</p>
              <h3>Gold Foil Experiment:</h3>
              <ul>
  <li>
    <strong>Gold Foil Experiment:</strong> Ernest Rutherford and his team conducted a groundbreaking experiment by bombarding a thin sheet of gold foil with alpha particles (helium nuclei) and observing their scattering patterns. Key observations included:
    <ul>
      <li>Most alpha particles passed straight through the foil, indicating that atoms are mostly empty space.</li>
      <li>A small fraction of particles were deflected at large angles, with some even rebounding, suggesting the presence of a dense, positively charged core within the atom.</li>
    </ul>
    This experiment provided direct evidence for the existence of a nucleus, revolutionizing the understanding of atomic structure.
  </li>
</ul>
<h3>Rutherford's Model:</h3>
<ul>
  <li>
    <strong>Structure of the Atom:</strong> Based on the gold foil experiment, Rutherford proposed a new atomic model:
    <ul>
      <li>Atoms consist of a small, dense nucleus containing positively charged protons (and later discovered neutrons).</li>
      <li>Electrons orbit the nucleus in vast empty space, similar to planets orbiting the sun.</li>
    </ul>
    This model explained the observed scattering of alpha particles and provided a more accurate depiction of atomic structure than previous models.
  </li>
  <li>
    <strong>Overturning the Plum Pudding Model:</strong> Rutherford's findings disproved J.J. Thomson's "plum pudding model," which suggested that atoms consisted of electrons embedded within a positively charged "soup." Instead, Rutherford's model highlighted the nucleus as the atom's central feature, surrounded by electrons.
  </li>
  <li>
    <strong>Foundation for Modern Atomic Theory:</strong> Rutherford's model paved the way for later developments, including:
    <ul>
      <li>Niels Bohr's refinement of atomic structure, introducing quantized electron orbits.</li>
      <li>The discovery of the neutron by James Chadwick, completing the picture of the nucleus.</li>
    </ul>
  </li>
</ul>
<p>
  Rutherford's work marked a turning point in atomic physics, establishing the nucleus as the core of the atom and providing a framework for understanding atomic behavior and interactions. His model remains a foundational milestone in the development of modern atomic theory.
</p>


            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Advancements in Atomic Theory (1920s–1930s)</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("advancements")}
            >
              {expandedSections.advancements ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.advancements && (
            <div className="section-content">
              <p>
                The 1920s and 1930s saw rapid progress in atomic theory, bridging classical and quantum physics.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Erwin_Schrodinger2.jpg"
                alt="Erwin Schrödinger as a young man"
              />
              <p>
                These advancements provided a more accurate picture of atomic structure and set the stage for modern chemistry and physics.
              </p>
              <h3>Key Developments:</h3>
<ul>
  <li>
    <strong>Niels Bohr (1913):</strong> Niels Bohr proposed the Bohr model of the atom, refining Rutherford’s nuclear model by introducing discrete energy levels for electrons:
    <ul>
      <li>Electrons orbit the nucleus in fixed paths, or energy levels, and can transition between these levels by absorbing or emitting energy in the form of photons.</li>
      <li>The model explained the spectral lines of hydrogen, providing a quantum explanation for atomic emission spectra.</li>
      <li>While later replaced by more advanced quantum models, the Bohr model was a crucial step in understanding atomic structure and quantum theory.</li>
    </ul>
  </li>
  <li>
    <strong>James Chadwick (1932):</strong> Chadwick discovered the neutron, resolving long-standing questions about atomic mass:
    <ul>
      <li>Neutrons, found in the nucleus alongside protons, are electrically neutral but have a similar mass to protons.</li>
      <li>This discovery explained why atomic masses were greater than the combined mass of the protons and electrons in an atom.</li>
      <li>Chadwick's work was critical for understanding nuclear reactions and paved the way for the development of nuclear energy and atomic weapons.</li>
    </ul>
  </li>
  <li>
    <strong>Quantum Mechanics:</strong> Werner Heisenberg, Erwin Schrödinger, and others developed quantum mechanical models that revolutionized the understanding of electron behavior:
    <ul>
      <li><strong>Heisenberg’s Uncertainty Principle:</strong> It is impossible to simultaneously know both the exact position and momentum of an electron, reflecting the probabilistic nature of quantum systems.</li>
      <li><strong>Schrödinger’s Wave Equation:</strong> Describes the behavior of electrons as wavefunctions, predicting the probability of finding an electron in a specific region of space (orbitals).</li>
      <li><strong>Quantum Mechanical Model:</strong> Electrons are no longer thought to orbit the nucleus in fixed paths but instead occupy regions of space with varying probabilities, known as atomic orbitals.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  These key developments transformed atomic theory from classical models to a quantum understanding, providing a more accurate and comprehensive framework for describing atomic structure and behavior. The Bohr model introduced quantized energy levels, Chadwick's discovery of the neutron completed the understanding of atomic mass, and quantum mechanics offered a probabilistic view of electron behavior, laying the foundation for modern physics and chemistry.
</p>

             
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The breakthroughs in atomic theory between 1900 and 1930 transformed our understanding of matter, paving the way for modern science and technology.
        </p>
        <Link to="/science/physical/chemistry" className="back-link">
          Back to Chemistry
        </Link>
      </footer>
    </div>
  );
};

export default AtomicTheory;
