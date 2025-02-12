import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const Einstein = () => {
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
        <h1>Einstein and the Universe: Relativity and Modern Cosmology (1900 CE – 1930 CE)</h1>
        <p>
          Explore how Albert Einstein's groundbreaking theories of relativity redefined our understanding of space, time, and gravity, transforming physics and laying the foundation for modern cosmology.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Special Theory of Relativity</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("specialRelativity")}
            >
              {expandedSections.specialRelativity ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.specialRelativity && (
            <div className="section-content">
             <p>
  Published in 1905, Einstein's Special Theory of Relativity transformed classical mechanics, introducing a revolutionary framework where the laws of physics are consistent for all non-accelerating observers. This theory interconnected space and time, fundamentally altering our understanding of the universe.
</p>
<h3>Key Insights:</h3>
<ul>
  <li>
    <strong>Constancy of the Speed of Light:</strong> Einstein proposed that the speed of light in a vacuum (<i>c</i>) is constant and does not depend on the motion of the observer or the light source:
    <ul>
      <li>This principle overturned the classical notion of an absolute space or ether through which light propagates.</li>
      <li>It established that the speed of light is the same for all inertial frames of reference, forming the cornerstone of relativity.</li>
    </ul>
  </li>
  <li>
    <strong>Time Dilation:</strong> Time slows down for objects in motion relative to an observer:
    <ul>
      <li>The relationship is expressed by the formula: <i>Δt' = Δt / √(1 - v²/c²)</i>, where <i>v</i> is the relative velocity.</li>
      <li>Experimental verification includes observations of fast-moving particles, such as muons created in the upper atmosphere, which live longer when traveling at high speeds toward Earth.</li>
    </ul>
  </li>
  <li>
    <strong>Length Contraction:</strong> Objects moving relative to an observer appear shorter along the direction of motion:
    <ul>
      <li>The contracted length is given by: <i>L = L₀√(1 - v²/c²)</i>, where <i>L₀</i> is the rest length.</li>
      <li>This phenomenon has been confirmed in particle accelerators, where high-speed particles exhibit measurable length changes relative to stationary frames.</li>
    </ul>
  </li>
  <li>
    <strong>E = mc²:</strong> Einstein's famous equation revealed that energy (<i>E</i>) and mass (<i>m</i>) are interchangeable:
    <ul>
      <li>The equation states that a small amount of mass can be converted into a large amount of energy, with the conversion factor being the speed of light squared.</li>
      <li>This principle underlies nuclear reactions, where the binding energy of atomic nuclei is released as energy, powering both stars and nuclear reactors.</li>
      <li>It also forms the foundation of modern particle physics, explaining processes like matter-antimatter annihilation.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The Special Theory of Relativity unified the concepts of space and time into a single framework, altering the way we understand motion, energy, and the fundamental nature of the universe. Its principles not only resolved inconsistencies in classical physics but also paved the way for groundbreaking advancements in science and technology, from GPS systems that account for time dilation to our understanding of the cosmos through relativistic astrophysics.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/World_line.svg/1280px-World_line.svg.png"
                alt="Albert Einstein, 1921"
              />
              <p className="caption">
              The world line: a diagrammatic representation of spacetime              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>General Theory of Relativity</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("generalRelativity")}
            >
              {expandedSections.generalRelativity ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.generalRelativity && (
            <div className="section-content">
            <p>
  In 1915, Albert Einstein expanded upon his Special Theory of Relativity to develop the General Theory of Relativity, which revolutionized the understanding of gravity. Unlike Newton’s conception of gravity as a force acting at a distance, Einstein redefined gravity as the curvature of spacetime caused by mass and energy.
</p>
<h3>Key Concepts:</h3>
<ul>
  <li>
    <strong>Spacetime Curvature:</strong> 
    <ul>
      <li>Einstein proposed that massive objects, such as stars and planets, create distortions in the fabric of spacetime, similar to the way a heavy ball deforms a stretched rubber sheet.</li>
      <li>Objects in the vicinity of these distortions move along curved paths, which we perceive as the effects of gravity. For example, the Earth's orbit around the Sun is a result of spacetime curvature caused by the Sun’s mass.</li>
      <li>This concept unified space and time into a four-dimensional continuum, fundamentally changing the framework for understanding gravitational interactions.</li>
    </ul>
  </li>
  <li>
    <strong>Gravitational Time Dilation:</strong>
    <ul>
      <li>Time runs slower in regions of stronger gravitational fields due to the warping of spacetime. This effect is quantified by Einstein’s field equations.</li>
      <li>Gravitational time dilation has been confirmed by experiments involving atomic clocks placed at different altitudes. For example, clocks at higher altitudes (weaker gravity) run faster than those at sea level.</li>
      <li>This phenomenon is critical for technologies like GPS, which must account for time dilation to maintain accuracy in positioning data.</li>
    </ul>
  </li>
  <li>
    <strong>Light Bending:</strong>
    <ul>
      <li>Einstein predicted that light passing near a massive object, such as a star, would follow a curved path due to spacetime distortion.</li>
      <li>This effect, known as gravitational lensing, was first confirmed during the 1919 solar eclipse, when starlight was observed bending around the Sun. The measured deflection matched Einstein’s predictions, providing dramatic evidence for the General Theory of Relativity.</li>
      <li>Gravitational lensing is now a powerful tool in astrophysics, used to study distant galaxies, dark matter, and the large-scale structure of the universe.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Einstein’s General Theory of Relativity is one of the pillars of modern physics, providing a deeper understanding of gravitational phenomena and expanding the scope of cosmology. It explains phenomena such as black holes, gravitational waves, and the expansion of the universe. The theory's predictions have been validated through numerous experiments and observations, making it a cornerstone of our understanding of the cosmos and its underlying laws.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Swiss-Commemorative-Coin-1979b-CHF-5-obverse.png"
                alt="Einstein Field Equations"
              />
              <p className="caption">
              A Swiss commemorative coin from 1979, showing the vacuum field equations with zero cosmological constant (top).
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Cosmology and the Expanding Universe</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("cosmology")}
            >
              {expandedSections.cosmology ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.cosmology && (
            <div className="section-content">
              <p>
  Einstein's equations of general relativity revolutionized cosmology, providing the theoretical foundation for understanding the universe's expansion, structure, and evolution. These equations have guided key discoveries in astrophysics and cosmology, shaping our view of the cosmos.
</p>
<h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>Cosmological Constant (Λ):</strong>
    <ul>
      <li>Einstein originally introduced the cosmological constant in 1917 to support the prevailing belief in a static universe. By adding Λ to his field equations, he counterbalanced the gravitational attraction of matter to maintain a stable cosmic structure.</li>
      <li>When evidence of an expanding universe emerged, Einstein reportedly referred to the cosmological constant as his "greatest blunder." However, Λ gained renewed relevance in the late 20th century when it was reinterpreted as representing dark energy, the mysterious force driving the accelerated expansion of the universe.</li>
      <li>This insight connects Einstein's work to contemporary studies of dark energy, one of the most profound mysteries in modern cosmology.</li>
    </ul>
  </li>
  <li>
    <strong>Friedmann Equations:</strong>
    <ul>
      <li>In the 1920s, Alexander Friedmann derived solutions to Einstein's field equations that described dynamic universes capable of expansion or contraction.</li>
      <li>Friedmann’s equations predicted an expanding universe, challenging the notion of a static cosmos and laying the groundwork for the Big Bang theory.</li>
      <li>These equations describe how the universe's expansion rate depends on its density, the cosmological constant, and other parameters, providing a mathematical framework for modern cosmology.</li>
    </ul>
  </li>
  <li>
    <strong>Hubble's Law:</strong>
    <ul>
      <li>In 1929, Edwin Hubble’s observations confirmed the predictions of Einstein and Friedmann by demonstrating that galaxies are receding from one another, with their speeds proportional to their distances (Hubble’s Law).</li>
      <li>Hubble’s discovery provided direct evidence for an expanding universe and established the empirical basis for the Big Bang model.</li>
      <li>This finding transformed cosmology into a quantitative science, enabling precise measurements of cosmic expansion and age.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Einstein's general relativity provided the framework for modern cosmology, enabling breakthroughs in understanding the universe's expansion, large-scale structure, and evolution. From the prediction of an expanding cosmos to the discovery of dark energy, these contributions have profoundly influenced our understanding of the universe. The equations remain central to cosmological research, connecting theoretical physics with observational discoveries.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Hubble_identity_card.jpg"
                alt="Edwin Hubble Observations"
              />
              <p className="caption">
              Hubble's identity card in the American Expeditionary Forces.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          Einstein’s theories of relativity transformed physics, bridging the gap
          between classical mechanics and quantum theory while revolutionizing
          cosmology and our understanding of the universe.
        </p>
        <Link to="/science/physical/astronomy" className="back-link">
          Back to Astronomy
        </Link>
      </footer>
    </div>
  );
};

export default Einstein;
