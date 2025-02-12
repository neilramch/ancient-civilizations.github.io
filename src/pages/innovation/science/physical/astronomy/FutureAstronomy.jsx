import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const FutureAstronomy = () => {
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
        <h1>The Future of Astronomy</h1>
        <p>
          Explore the forefront of astronomical research, from the mysteries of dark energy to the search for extraterrestrial life. Humanity's curiosity about the cosmos continues to drive groundbreaking discoveries and ambitious endeavors.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Dark Energy and the Accelerating Universe</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("darkEnergy")}
            >
              {expandedSections.darkEnergy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.darkEnergy && (
            <div className="section-content">
              <p>
  Dark energy, a mysterious force causing the accelerated expansion of the universe, remains one of the greatest puzzles in cosmology. First identified in 1998 through observations of distant supernovae, its discovery fundamentally altered our understanding of the cosmos. Saul Perlmutter, Brian Schmidt, and Adam Riess were awarded the Nobel Prize in Physics in 2011 for this groundbreaking revelation, which continues to shape the field of astrophysics.
</p>
<h3>Key Questions:</h3>
<ul>
  <li>
    <strong>What is the nature of dark energy?</strong>
    <ul>
      <li>Is dark energy a property of space itself, as described by Einstein’s cosmological constant, or a dynamic field known as quintessence?</li>
      <li>Understanding its nature requires probing the interplay between dark energy, matter, and the curvature of spacetime.</li>
    </ul>
  </li>
  <li>
    <strong>How does dark energy influence the ultimate fate of the universe?</strong>
    <ul>
      <li>If dark energy remains constant, the universe may expand forever in a "Big Freeze," where galaxies drift apart and stars cease to form.</li>
      <li>If dark energy varies over time, it could lead to other outcomes, such as a "Big Rip," where the universe’s expansion accelerates until even atoms are torn apart.</li>
    </ul>
  </li>
  <li>
    <strong>Is dark energy related to Einstein’s cosmological constant?</strong>
    <ul>
      <li>Einstein introduced the cosmological constant (Λ) in 1917 to describe a static universe, later abandoning it when the universe was discovered to be expanding.</li>
      <li>Modern cosmology reinterprets Λ as a representation of dark energy, though its precise physical origins remain unknown.</li>
    </ul>
  </li>
</ul>
<h3>Future Observations:</h3>
<ul>
  <li>
    <strong>Vera C. Rubin Observatory:</strong>
    <ul>
      <li>Scheduled to begin operations in the mid-2020s, this state-of-the-art observatory will conduct the Legacy Survey of Space and Time (LSST), mapping billions of galaxies across a vast portion of the sky.</li>
      <li>The LSST will provide detailed data on cosmic structure and expansion, offering new insights into the role of dark energy in shaping the universe’s evolution.</li>
    </ul>
  </li>
  <li>
    <strong>Euclid Mission:</strong>
    <ul>
      <li>Launched by the European Space Agency, Euclid aims to study the geometry of the universe by observing the distribution of galaxies and dark matter over time.</li>
      <li>Using techniques like weak gravitational lensing and galaxy clustering, Euclid will explore the effects of dark energy on the large-scale structure of the universe, helping to refine models of cosmic acceleration.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The study of dark energy represents a frontier in cosmology, with profound implications for physics and our understanding of the universe. By addressing fundamental questions about its nature and behavior, future observations from advanced missions like the Vera C. Rubin Observatory and the Euclid Mission will bring us closer to unraveling one of the deepest mysteries of the cosmos.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Dark_Energy.jpg"
                alt="Diagram showing dark energy driving the expansion of the universe"
              />
              <p className="caption">Diagram representing the accelerated expansion of the universe due to dark energy.</p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Gravitational Waves</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("gravitationalWaves")}
            >
              {expandedSections.gravitationalWaves ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.gravitationalWaves && (
            <div className="section-content">
              <p>
  Predicted by Einstein’s theory of general relativity in 1916, gravitational waves are ripples in the fabric of spacetime caused by massive cosmic events, such as merging black holes, colliding neutron stars, or supernovae. These waves propagate outward at the speed of light, carrying information about their sources. Their groundbreaking first detection on September 14, 2015, by the Laser Interferometer Gravitational-Wave Observatory (LIGO) marked the beginning of gravitational wave astronomy, transforming our ability to study the universe.
</p>
<h3>Key Developments:</h3>
<ul>
  <li>
    <strong>Advanced Detectors:</strong>
    <ul>
      <li><strong>LIGO (Laser Interferometer Gravitational-Wave Observatory):</strong> With observatories in Washington and Louisiana, LIGO detected the first gravitational waves from a black hole merger 1.3 billion light-years away.</li>
      <li><strong>Virgo:</strong> Located in Italy, Virgo collaborates with LIGO, improving localization of gravitational wave sources by contributing additional detection data.</li>
      <li><strong>KAGRA:</strong> Situated in Japan, KAGRA is the first underground gravitational wave detector, reducing seismic noise and enhancing sensitivity.</li>
      <li>These detectors continually undergo upgrades to improve their ability to detect fainter and more distant gravitational wave events.</li>
    </ul>
  </li>
  <li>
    <strong>Future Missions:</strong>
    <ul>
      <li><strong>Laser Interferometer Space Antenna (LISA):</strong> Scheduled for launch in the 2030s, LISA will operate in space to detect low-frequency gravitational waves. It will study events such as the mergers of supermassive black holes and interactions involving stellar remnants.</li>
      <li>LISA’s sensitivity to low frequencies complements ground-based detectors, providing insights into longer-duration and more massive events.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<ul>
  <li>
    <strong>Revolutionizing Astronomy:</strong> Gravitational wave astronomy offers a new way to observe the universe, complementing traditional electromagnetic observations (e.g., visible light, X-rays, radio waves). It allows astronomers to study events that are otherwise invisible, such as black hole mergers that emit no light.
  </li>
  <li>
    <strong>Probing Extreme Environments:</strong> Gravitational waves carry information about the most extreme environments in the universe, such as the dynamics of black holes, neutron star collisions, and the properties of spacetime itself.
  </li>
  <li>
    <strong>Testing Relativity and Physics:</strong> Observations of gravitational waves provide an unparalleled opportunity to test Einstein’s theory of general relativity under extreme conditions, such as strong gravitational fields and high velocities.
  </li>
  <li>
    <strong>Unlocking Cosmic Mysteries:</strong> Gravitational wave data offers clues about the formation and evolution of black holes, neutron stars, and the early universe, expanding our understanding of cosmic history.
  </li>
</ul>
<h3>Outlook:</h3>
<p>
  The detection of gravitational waves has opened a new window to the universe, enabling scientists to study phenomena that were once purely theoretical. With advancing technology and future missions like LISA, the field of gravitational wave astronomy will continue to unveil profound insights about the cosmos and its most enigmatic events.
</p>

              <video height="450" width="auto" controls>
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/Warped_Space_and_Time_Around_Colliding_Black_Holes_%28Courtesy_Caltech-MIT-LIGO_Laboratory%2C_produced_by_SXS_project%29.webm"
              />
              </video>
              <p className="caption">As two black holes orbit closer to one another, they emit gravitational waves, the frequency of which increases to a peak as the black holes coalesce.</p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>The Search for Extraterrestrial Life</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("extraterrestrialLife")}
            >
              {expandedSections.extraterrestrialLife ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.extraterrestrialLife && (
            <div className="section-content">
             <p>
  The search for extraterrestrial life has become one of the most compelling pursuits in modern science. Advances in technology, combined with the discovery of thousands of exoplanets, many of which lie in habitable zones, have intensified efforts to answer one of humanity’s most profound questions: Are we alone in the universe? This quest drives missions, collaborations, and research initiatives across the globe.
</p>
<h3>Key Efforts:</h3>
<ul>
  <li>
    <strong>Mars Missions:</strong>
    <ul>
      <li><strong>Perseverance:</strong> NASA's Perseverance rover, currently exploring Jezero Crater, is searching for biosignatures—chemical or structural evidence of past or present life on Mars.</li>
      <li><strong>ExoMars:</strong> A joint mission by the European Space Agency (ESA) and Roscosmos, ExoMars aims to drill beneath the Martian surface to search for microbial life and analyze soil samples for organic compounds.</li>
      <li>These missions aim to determine whether Mars once had conditions suitable for life and to pave the way for future human exploration.</li>
    </ul>
  </li>
  <li>
    <strong>James Webb Space Telescope (JWST):</strong>
    <ul>
      <li>JWST is revolutionizing the study of exoplanet atmospheres, analyzing their compositions for potential biosignatures, such as oxygen, methane, and water vapor.</li>
      <li>Its unparalleled sensitivity and ability to observe in the infrared spectrum make it ideal for detecting chemical markers associated with life.</li>
    </ul>
  </li>
  <li>
    <strong>SETI (Search for Extraterrestrial Intelligence):</strong>
    <ul>
      <li>SETI uses radio telescopes to monitor the skies for signals that could indicate intelligent alien civilizations.</li>
      <li>In addition to radio signals, researchers are exploring other "technosignatures," such as laser emissions or large-scale artificial structures, that could indicate advanced extraterrestrial technology.</li>
    </ul>
  </li>
</ul>
<h3>Promising Targets:</h3>
<ul>
  <li>
    <strong>Enceladus and Europa:</strong> 
    <ul>
      <li>These icy moons of Saturn and Jupiter, respectively, are among the most promising locations for finding extraterrestrial life in our solar system.</li>
      <li>Both moons harbor subsurface oceans beneath their icy crusts, kept liquid by tidal heating from their parent planets.</li>
      <li>Plumes of water vapor and organic molecules have been detected erupting from Enceladus, while Europa’s surface features suggest active geological processes that could support microbial life.</li>
    </ul>
  </li>
  <li>
    <strong>Proxima Centauri b:</strong>
    <ul>
      <li>This exoplanet orbits in the habitable zone of Proxima Centauri, the closest star to our solar system at 4.24 light-years away.</li>
      <li>It is roughly Earth-sized and could have conditions suitable for liquid water, a key ingredient for life as we know it.</li>
      <li>Future observations aim to study its atmosphere, surface conditions, and potential habitability in greater detail.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The search for extraterrestrial life combines cutting-edge technology with deep philosophical implications, driving humanity’s quest to understand its place in the universe. From exploring nearby worlds like Mars and icy moons to analyzing distant exoplanets, each discovery brings us closer to answering the ultimate question: Are we alone, or is life a universal phenomenon?
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/New_shot_of_Proxima_Centauri%2C_our_nearest_neighbour.jpg"
                alt="Proxima Centauri, the closest star to the Sun"
              />
              <p className="caption">False color Hubble Space Telescope WFPC2 image taken in 2013. The bright lines are diffraction spikes.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The future of astronomy promises to uncover the deepest mysteries of the cosmos, from understanding the universe's origins to finding life beyond Earth. With each discovery, humanity moves closer to answering profound questions about our existence.
        </p>
        <Link to="/science/physical/astronomy" className="back-link">
          Back to Astronomy
        </Link>
      </footer>
    </div>
  );
};

export default FutureAstronomy;
