import React, { useState } from "react";
import "./Quantum.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const QuantumRevolution = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="quantum-revolution-container">
      <header className="quantum-revolution-header">
        <h1>Quantum Revolution: The Dawn of Modern Physics (1900–1930)</h1>
        <p>
          The early 20th century witnessed a paradigm shift in physics, as scientists uncovered the mysteries of the quantum realm, challenging classical physics and introducing revolutionary concepts like quantum mechanics and wave-particle duality.
        </p>
      </header>

      <main className="quantum-revolution-main">
        <section className="topic">
          <div className="section-header">
            <h2>Planck and the Birth of Quantum Theory</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("planckQuantumTheory")}
            >
              {expandedSections.planckQuantumTheory ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.planckQuantumTheory && (
            <div className="section-content">
              <p>
                Quantum theory began in 1900 when Max Planck introduced the concept of energy quanta to explain blackbody radiation. This marked the first departure from classical physics, suggesting that energy is quantized rather than continuous.
              </p>

              <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Max_Planck_1878.GIF" />
              <p className="caption">A side portrait of Planck as a young adult, c. 1878</p>

              <h3>Key Developments:</h3>
<ul>
  <li>
    <strong>1900:</strong> Planck’s formula for blackbody radiation included a constant (<i>h</i>), now known as Planck’s constant.
  </li>
  <li>
    Energy is emitted or absorbed in discrete packets called quanta, with energy proportional to frequency:
    <br />
    <i>E = hν</i>
  </li>
  <li>
    This work resolved the “ultraviolet catastrophe,” where classical physics failed to describe blackbody radiation, especially at shorter wavelengths.
  </li>
  <li>
    Planck introduced the idea that energy levels are quantized, marking a departure from classical continuous energy distributions.
  </li>
  <li>
    The quantum hypothesis challenged traditional Newtonian mechanics and Maxwell’s electromagnetic theory, requiring a new framework for understanding atomic and subatomic phenomena.
  </li>
  <li>
    The discovery provided crucial groundwork for Albert Einstein’s explanation of the photoelectric effect in 1905, further validating the concept of quantized energy.
  </li>
</ul>
<h3>Impact:</h3>
<p>
  Planck's quantum hypothesis laid the foundation for quantum mechanics, a revolutionary framework that has profoundly influenced modern physics. It enabled the development of key principles such as wave-particle duality, uncertainty relations, and quantum state superposition.
</p>
<p>
  This work influenced later groundbreaking discoveries, including the development of the Bohr model of the atom, Schrödinger's wave mechanics, and Heisenberg's matrix mechanics, which collectively form the core of quantum theory.
</p>
<p>
  Beyond physics, quantum mechanics has had wide-reaching applications in chemistry, materials science, and technology, driving innovations like semiconductors, lasers, and quantum computing.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Einstein and the Photoelectric Effect</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("einsteinPhotoelectric")}
            >
              {expandedSections.einsteinPhotoelectric ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.einsteinPhotoelectric && (
            <div className="section-content">
              <p>
                In 1905, Albert Einstein expanded on Planck’s ideas to explain the photoelectric effect, providing critical evidence for the quantization of energy.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Gold_leaf_electroscope_1869.png" />
              <p className="caption">Gold leaf electroscope demonstrating the photoelectric effect. When the electroscope disk is negatively charged with excess electrons, the gold leaves mutually repel. If high-energy light (such as ultraviolet) is then shone on the disk, electrons are emitted by the photoelectric effect and the leaf repulsion ceases. But if the light used has insufficient energy to stimulate electron emission, the leaves stay separated regardless of duration.</p>
              <h3>Key Insights:</h3>
<ul>
  <li>
    Einstein proposed that light consists of particles called photons, each carrying energy proportional to its frequency:
    <br />
    <i>E = hν</i>, where <i>h</i> is Planck’s constant, and <i>ν</i> is the frequency of light.
  </li>
  <li>
    When photons strike the surface of a metal, they transfer their energy to electrons. If the energy exceeds the material's work function (the minimum energy needed to eject an electron), the electron is released from the material.
  </li>
  <li>
    The energy of the ejected electrons is determined by the frequency of the incident light and not its intensity. This was contrary to predictions of classical wave theory, which suggested that light intensity should govern electron ejection.
  </li>
  <li>
    The photoelectric effect provided direct evidence for the particle nature of light and validated the quantum theory proposed by Planck, where energy is quantized.
  </li>
  <li>
    Einstein’s explanation also introduced the concept of the threshold frequency, below which no electrons are emitted regardless of light intensity, further challenging classical wave-based theories of light.
  </li>
</ul>
<h3>Impact:</h3>
<p>
  Einstein's work on the photoelectric effect earned him the Nobel Prize in Physics in 1921, cementing the importance of quantum theory in understanding the nature of light and energy transfer.
</p>
<p>
  His discovery demonstrated the dual nature of light, behaving both as a wave and as a particle, and laid the foundation for quantum mechanics and the field of quantum electrodynamics.
</p>
<p>
  The principles derived from the photoelectric effect have practical applications in technologies such as photovoltaic cells (solar panels), photoelectron spectroscopy, and various light-sensing devices. It also deepened our understanding of fundamental interactions between light and matter.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Bohr and the Quantum Atom</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("bohrQuantumAtom")}
            >
              {expandedSections.bohrQuantumAtom ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.bohrQuantumAtom && (
            <div className="section-content">
              <p>
                Niels Bohr refined atomic theory by incorporating quantum ideas, leading to a model that explained the stability of atoms and spectral lines.
              </p>
              <img src="https://cdn.britannica.com/09/149209-050-57443291/Bohr-model-nitrogen-atom.jpg" />
              <p className="caption">Bohr model of a nitrogen atom</p>
              <h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>1913:</strong> Niels Bohr proposed that electrons orbit the nucleus in discrete, quantized energy levels. Electrons can transition between these levels by absorbing or emitting specific quanta of energy, corresponding to the difference between the energy levels.
  </li>
  <li>
    Bohr’s model successfully explained the spectral lines of hydrogen, providing a theoretical foundation for the observed line emission spectra, which classical physics could not.
  </li>
  <li>
    Introduced the principle of quantized angular momentum, where the angular momentum of electrons in orbit is an integer multiple of the reduced Planck’s constant:
    <br />
    <i>L = nħ</i>, where <i>n</i> is a positive integer (quantum number) and <i>ħ</i> is the reduced Planck’s constant.
  </li>
  <li>
    Bohr’s theory incorporated the concept of a stable electron orbit, explaining why electrons do not spiral into the nucleus under classical electromagnetic theory.
  </li>
  <li>
    The model also introduced the idea of quantized energy states, forming a critical link between atomic structure and quantum theory.
  </li>
  <li>
    Although later replaced by more comprehensive quantum mechanical models, Bohr’s work was instrumental in bridging classical and quantum physics.
  </li>
</ul>
<h3>Legacy:</h3>
<p>
  Bohr’s quantum model of the atom marked a pivotal shift in atomic theory, laying the groundwork for the development of quantum mechanics. It inspired the work of other physicists, including Schrödinger, Heisenberg, and Dirac, whose contributions collectively defined the modern understanding of atomic and subatomic systems.
</p>
<p>
  The quantization concepts introduced by Bohr became central to the Copenhagen interpretation of quantum mechanics, which Bohr himself helped establish.
</p>
<p>
  Beyond theory, Bohr’s insights have had lasting impacts on fields like spectroscopy, quantum chemistry, and nuclear physics. His legacy also includes his role as a mentor to future generations of scientists and his contributions to philosophical debates on the interpretation of quantum theory.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Wave-Particle Duality</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("waveParticleDuality")}
            >
              {expandedSections.waveParticleDuality ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.waveParticleDuality && (
            <div className="section-content">
              <p>
                The concept of wave-particle duality, central to quantum mechanics, describes how particles like electrons exhibit both wave-like and particle-like properties.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_François_Marie_de_Broglie%2C_Duke_of_Broglie%2C_Marshal_of_France_%28member_of_the_circle_of_Hyacinthe_Rigaud%29.jpg/1280px-Portrait_of_François_Marie_de_Broglie%2C_Duke_of_Broglie%2C_Marshal_of_France_%28member_of_the_circle_of_Hyacinthe_Rigaud%29.jpg" />
              <p className="caption">François-Marie, 1st duc de Broglie (1671–1745) ancestor of Louis de Broglie and Marshal of France under Louis XV of France</p>
              <h3>Historical Developments:</h3>
<ul>
  <li>
    <strong>1923:</strong> Louis de Broglie proposed that matter, like light, exhibits wave-particle duality. He introduced the concept that particles such as electrons have an associated wavelength, now known as the de Broglie wavelength, expressed as:
    <br />
    <i>λ = h / p</i>, where <i>λ</i> is the wavelength, <i>h</i> is Planck’s constant, and <i>p</i> is the momentum of the particle.
  </li>
  <li>
    This hypothesis provided a theoretical foundation for the wave-like behavior of particles, bridging the gap between classical mechanics and quantum theory.
  </li>
  <li>
    <strong>1927:</strong> The Davisson-Germer experiment provided experimental confirmation of de Broglie’s hypothesis. By directing a beam of electrons at a nickel crystal, scientists observed diffraction patterns, a phenomenon previously associated only with waves.
  </li>
  <li>
    The experiment demonstrated that electrons, and by extension all matter, exhibit wave-like properties under certain conditions, validating the wave-particle duality concept.
  </li>
  <li>
    These discoveries laid the groundwork for the development of wave mechanics, a cornerstone of quantum theory, later formalized by Schrödinger’s wave equation.
  </li>
</ul>
<h3>Implications:</h3>
<p>
  The discovery of wave-particle duality fundamentally altered our understanding of matter and energy, demonstrating that entities previously considered purely particles or waves could exhibit both behaviors depending on the context.
</p>
<p>
  This insight led to the development of quantum mechanics, providing tools to describe the behavior of atomic and subatomic particles with unprecedented accuracy. It also offered a deeper understanding of phenomena such as electron orbits, chemical bonding, and the behavior of materials at the quantum scale.
</p>
<p>
  Practical applications of wave-particle duality include technologies such as electron microscopy, which exploits the wave nature of electrons to achieve imaging resolutions far beyond the limits of optical microscopes. Additionally, it has influenced fields like quantum computing, nanotechnology, and materials science, shaping advancements in both fundamental research and applied technology.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Heisenberg and the Uncertainty Principle</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("heisenbergUncertainty")}
            >
              {expandedSections.heisenbergUncertainty ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.heisenbergUncertainty && (
            <div className="section-content">
              <p>
                Werner Heisenberg’s uncertainty principle (1927) revealed a fundamental limit to our ability to simultaneously measure certain properties of particles, such as position and momentum.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Bundesarchiv_Bild183-R57262%2C_Werner_Heisenberg.jpg" />
              <p className="caption">Heisenberg in 1933</p>
              <h3>Key Principle:</h3>
<ul>
  <li>
    The uncertainty in position (<i>Δx</i>) and momentum (<i>Δp</i>) of a particle is constrained by Heisenberg’s uncertainty principle:
    <br />
    <i>Δx · Δp ≥ ħ / 2</i>, where <i>ħ</i> is the reduced Planck’s constant.
  </li>
  <li>
    This principle establishes that it is fundamentally impossible to simultaneously determine the exact position and momentum of a particle. The more precisely one property is measured, the less precisely the other can be known.
  </li>
  <li>
    It reflects the inherent probabilistic nature of quantum mechanics, where particles are described by wavefunctions rather than fixed trajectories, challenging the deterministic worldview of classical physics.
  </li>
  <li>
    The uncertainty principle is not a limitation of measurement instruments but a fundamental property of quantum systems, arising from the wave-particle duality of matter.
  </li>
  <li>
    Extensions of the principle also apply to other pairs of conjugate variables, such as energy and time (<i>ΔE · Δt ≥ ħ / 2</i>), further influencing our understanding of quantum behavior.
  </li>
</ul>
<h3>Impact:</h3>
<p>
  Heisenberg’s uncertainty principle is a cornerstone of quantum mechanics, fundamentally reshaping our understanding of reality. It underpins the probabilistic interpretation of quantum systems, as described by the Copenhagen interpretation.
</p>
<p>
  The principle has profound philosophical implications, challenging classical determinism and suggesting that at the quantum level, nature operates within a framework of probabilities rather than certainties.
</p>
<p>
  Practically, the uncertainty principle has paved the way for advancements in quantum technologies. For example, it underlies quantum cryptography, where the act of measurement disturbs quantum states, ensuring secure communication. It also influences developments in fields such as quantum computing, quantum sensing, and high-resolution spectroscopy.
</p>
<p>
  Beyond technology, the uncertainty principle has enriched fields like chemistry and material science, providing insights into electron behavior in atoms and molecules and influencing the design of new materials at the quantum scale.
</p>

            </div>
          )}
        </section>
      </main>

      <footer className="quantum-revolution-footer">
        <p>
          The Quantum Revolution redefined physics, uncovering the strange and fascinating behavior of matter and energy at the smallest scales, shaping modern science and technology.
        </p>
        <Link to="/science/physical/physics" className="back-link">
          Back to Physics
        </Link>
      </footer>
    </div>
  );
};

export default QuantumRevolution;
