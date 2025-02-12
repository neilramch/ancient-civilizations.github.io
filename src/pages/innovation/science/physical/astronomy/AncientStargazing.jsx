import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const AncientStargazing = () => {
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
        <h1>Ancient Stargazing: Mapping the Heavens (c. 3000 BCE – 500 CE)</h1>
        <p>
          Discover how ancient civilizations observed the skies, creating calendars, navigation systems, and myths based on celestial phenomena.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Babylonian Astronomy</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("babylonianAstronomy")}
            >
              {expandedSections.babylonianAstronomy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.babylonianAstronomy && (
            <div className="section-content">
              <p>
                The Babylonians were among the earliest to systematically observe
                the skies, developing detailed star catalogs and predicting celestial
                events.
              </p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Babylonian_tablet_recording_Halley%27s_comet.jpg" />
              <p className="caption">A Babylonian tablet recording Halley's comet in 164 BC</p>
              <h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>Star Catalogs:</strong> Babylonian astronomers, as early as 1200 BCE, created detailed star catalogs that mapped the night sky. Key features include:
    <ul>
      <li>The identification and documentation of stars and constellations, forming the basis for later Greek and Islamic astronomical traditions.</li>
      <li>Records such as the "Mul.Apin" tablets, which list stars, constellations, and celestial events, serving as one of the earliest comprehensive astronomical guides.</li>
      <li>These catalogs helped establish an observational tradition that influenced the development of positional astronomy.</li>
    </ul>
  </li>
  <li>
    <strong>Ecliptic System:</strong> The Babylonians divided the sky into the zodiac, defining 12 constellations along the Sun’s apparent annual path (the ecliptic). Significant contributions include:
    <ul>
      <li>The zodiacal system provided a framework for tracking celestial motions and understanding seasonal changes.</li>
      <li>They associated constellations with deities and mythological figures, integrating astronomy with Babylonian culture and religion.</li>
      <li>The ecliptic system became a foundational tool for later astrological and astronomical calculations in other civilizations, such as the Greeks and Romans.</li>
    </ul>
  </li>
  <li>
    <strong>Lunar-Solar Calendars:</strong> Babylonian astronomers precisely tracked the Moon and Sun, leading to the development of highly accurate calendars. Notable achievements include:
    <ul>
      <li>The creation of a lunisolar calendar that aligned lunar months with the solar year by intercalating extra months to maintain seasonal accuracy.</li>
      <li>Calendars that were critical for agriculture, predicting seasonal events, and determining the timing of religious festivals and ceremonies.</li>
      <li>The introduction of methods to predict lunar and solar eclipses, demonstrating advanced mathematical and observational skills.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Babylonian contributions to astronomy laid the groundwork for later civilizations, including the Greeks, who expanded upon Babylonian records to develop more advanced theories. The systematic observation and documentation practices of Babylonian astronomers influenced the evolution of astronomy as a precise scientific discipline. Their star catalogs, ecliptic divisions, and calendrical systems continue to be recognized as pivotal achievements in the history of astronomy.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mul.Apin_Babylonian_Astronomy.jpg/800px-Mul.Apin_Babylonian_Astronomy.jpg"
                alt="Babylonian Star Chart"
              />
              <p>
                Babylonian texts, such as the <i>Mul.Apin</i>, were crucial in
                documenting astronomical knowledge and influencing Greek and Islamic
                astronomy.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Egyptian Stargazing</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("egyptianStargazing")}
            >
              {expandedSections.egyptianStargazing ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.egyptianStargazing && (
            <div className="section-content">
              <p>
                Ancient Egyptians relied on celestial observations to guide their
                agriculture, religion, and architecture.
              </p>
              <h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>Sirius and the Nile:</strong> Ancient Egyptian astronomers observed the heliacal rising of Sirius (the first appearance of the star just before sunrise) as a critical marker:
    <ul>
      <li>The rising of Sirius coincided with the annual flooding of the Nile, which was vital for agriculture, replenishing the soil with nutrient-rich silt.</li>
      <li>This observation allowed Egyptians to predict the flood's timing and structure their agricultural calendar accordingly, ensuring the survival and prosperity of their civilization.</li>
      <li>The association of Sirius with the goddess Isis underscored its cultural and religious significance in Egyptian society.</li>
    </ul>
  </li>
  <li>
    <strong>Pyramids and Stars:</strong> The alignment of the Great Pyramids of Giza with celestial objects highlights the Egyptians' sophisticated understanding of astronomy:
    <ul>
      <li>The pyramids are aligned with key stars in the Orion constellation, believed to represent the god Osiris in Egyptian cosmology.</li>
      <li>The north-south orientation of the pyramids aligns with the celestial pole, reflecting their precise architectural and astronomical knowledge.</li>
      <li>This alignment demonstrates the integration of cosmology into religious practices and the construction of monumental structures.</li>
    </ul>
  </li>
  <li>
    <strong>Decans:</strong> Egyptians divided the night sky into 36 "decans," or star groups, which were used for timekeeping and marking seasonal changes:
    <ul>
      <li>Each decan rose above the horizon in sequence every 10 days, providing a celestial clock that divided the year into 360 days.</li>
      <li>The decan system was used to create star charts and calendars, such as the "Diagonal Star Table" found in tombs, which provided guidance for rituals and daily life.</li>
      <li>The decan-based system formed the foundation for later developments in horology and influenced astronomical practices in other cultures.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Ancient Egyptian astronomy was deeply intertwined with their agricultural practices, religion, and monumental architecture. By observing celestial patterns, they developed systems for timekeeping, calendar creation, and aligning their society with cosmic cycles. These contributions not only sustained their civilization but also influenced subsequent cultures, leaving a lasting legacy in the history of astronomy and science.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Astronomical_Ceiling%2C_Tomb_of_Senenmut_MET_DT207429.jpg/1280px-Astronomical_Ceiling%2C_Tomb_of_Senenmut_MET_DT207429.jpg"
                alt="Egyptian Stellar Alignments"
              />
              <p className="caption">Astronomical ceiling from the Tomb of Senenmut (XVIII Dynasty, circa 1479–1458 BCE), discovered in Thebes, Upper Egypt; facsimile preserved in the Metropolitan Museum of Art</p>
              <p>
                Their religious texts, such as the <i>Pyramid Texts</i>, demonstrate
                the integration of astronomy into their spiritual beliefs.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Mayans and Celestial Cycles</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("mayanAstronomy")}
            >
              {expandedSections.mayanAstronomy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.mayanAstronomy && (
            <div className="section-content">
              <p>
                The Maya civilization developed advanced astronomical systems, using
                celestial observations to structure their calendars and guide
                ceremonial life.
              </p>
              <h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>Venus Observations:</strong> The Maya meticulously tracked the motions of Venus, recognizing its significance as the brightest celestial object after the Sun and Moon:
    <ul>
      <li>They recorded Venus’s synodic cycle (584 days) with remarkable accuracy, aligning their observations with its appearances as the Morning and Evening Star.</li>
      <li>Venus was associated with warfare and ritual activities, and its heliacal risings and settings often marked important events, such as the timing of battles or sacrifices.</li>
      <li>The "Dresden Codex," one of the few surviving Maya manuscripts, contains detailed Venus tables, demonstrating their advanced understanding of planetary cycles and their integration into Maya cosmology and society.</li>
    </ul>
  </li>
  <li>
    <strong>The Long Count Calendar:</strong> The Maya developed a sophisticated calendrical system to measure vast spans of time, integrating multiple cycles:
    <ul>
      <li>The Long Count Calendar tracked dates over thousands of years, starting from a mythical creation date (August 11, 3114 BCE in the Gregorian calendar).</li>
      <li>It combined solar, lunar, and Venusian cycles, demonstrating a comprehensive understanding of celestial mechanics and their interplay.</li>
      <li>This system was used to record historical events, predict celestial phenomena, and align ceremonial activities with cosmic rhythms, illustrating the Maya’s deep connection between astronomy and cultural practices.</li>
    </ul>
  </li>
  <li>
    <strong>Observatories:</strong> The Maya constructed sophisticated observatories that aligned with key celestial events:
    <ul>
      <li><strong>El Caracol:</strong> This spiral-shaped structure at Chichén Itzá featured windows and alignments designed to observe the solstices, equinoxes, and Venus's movements, highlighting their architectural and scientific expertise.</li>
      <li>Other structures, such as the Temple of Kukulcán, were oriented to create light and shadow effects during the equinoxes, linking astronomical events with religious symbolism.</li>
      <li>These observatories reflect the integration of astronomy into Maya architecture, religious practices, and governance.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Maya astronomy represents a remarkable achievement in ancient science, blending meticulous observation, mathematical precision, and cultural significance. Their advanced knowledge of celestial cycles informed their calendars, rituals, and daily life, leaving a legacy that continues to inspire fascination and study. The Maya’s integration of astronomy with architecture and cultural identity showcases their ingenuity and deep connection to the cosmos.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Chichen_Itza_4.jpg/1280px-Chichen_Itza_4.jpg"
                alt="El Caracol Observatory, Chichén Itzá"
              />
              <p>
                Mayan codices and monuments reveal their intricate understanding of
                celestial mechanics and its importance in their culture.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The study of the skies by ancient civilizations laid the foundation for
          modern astronomy, showcasing humanity's enduring fascination with the
          cosmos.
        </p>
        <Link to="/science/physical/astronomy" className="back-link">
          Back to Astronomy
        </Link>
      </footer>
    </div>
  );
};

export default AncientStargazing;
