import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const AgeOfExploration = () => {
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
        <h1>The Age of Exploration: Advancing Earth's Understanding</h1>
        <p>
          Between 1500 and 1800, explorers and scientists expanded humanity’s knowledge of Earth's geography, natural resources, and geological features. Their discoveries laid the groundwork for modern geological studies.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Geographical Discoveries</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("geographicalDiscoveries")}
            >
              {expandedSections.geographicalDiscoveries ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.geographicalDiscoveries && (
            <div className="section-content">
             <p>
  The Age of Exploration (15th to 18th centuries) was a transformative period in human history, characterized by unprecedented maritime expeditions. These voyages revealed previously unknown continents, oceans, and natural landscapes, broadening humanity’s understanding of the world and laying the groundwork for global trade, cultural exchanges, and scientific advancements.
</p>
<h3>Key Milestones:</h3>
<ul>
  <li>
    <strong>1492: Christopher Columbus’s Voyage:</strong>
    <ul>
      <li>Columbus’s expedition, sponsored by Spain, reached the Americas, marking the first sustained European contact with the New World.</li>
      <li>This milestone opened the door to further exploration, colonization, and resource extraction, which reshaped global geopolitics and economies.</li>
      <li>The discovery of the Americas introduced Europeans to diverse ecosystems and geological features, sparking a greater interest in Earth’s natural diversity.</li>
    </ul>
  </li>
  <li>
    <strong>1519–1522: Ferdinand Magellan’s Circumnavigation:</strong>
    <ul>
      <li>Magellan’s expedition, completed by Juan Sebastián Elcano after Magellan’s death, was the first to circumnavigate the globe.</li>
      <li>This journey confirmed the Earth’s roundness and highlighted the vastness of its oceans, changing perceptions of global geography.</li>
      <li>Detailed observations during the voyage contributed to a deeper understanding of ocean currents, wind patterns, and global navigation techniques.</li>
    </ul>
  </li>
  <li>
    <strong>1770: James Cook’s Exploration of Australia and New Zealand:</strong>
    <ul>
      <li>James Cook’s expeditions mapped the coasts of Australia, New Zealand, and the Pacific Islands, revealing uncharted territories and their geological features.</li>
      <li>Cook’s detailed maps and observations expanded scientific knowledge of these regions, including their flora, fauna, and mineral resources.</li>
      <li>These explorations laid the foundation for future geological studies in the Southern Hemisphere.</li>
    </ul>
  </li>
</ul>
<h3>Geological Implications:</h3>
<ul>
  <li>
    <strong>Discovery of Diverse Landscapes:</strong>
    <ul>
      <li>Explorers encountered a wide range of physical features, from the vast deserts of Africa and the Americas to the dense rainforests of the Amazon and Southeast Asia.</li>
      <li>These discoveries led to the categorization and study of Earth’s biomes, climate zones, and geological formations, enriching scientific understanding of global diversity.</li>
    </ul>
  </li>
  <li>
    <strong>Advancements in Mapping Techniques:</strong>
    <ul>
      <li>Maritime expeditions drove the development of cartography, resulting in more accurate maps that provided a comprehensive view of Earth’s topography and coastlines.</li>
      <li>These maps served as critical tools for future explorations, trade, and scientific research, enabling systematic study of Earth’s geography and geology.</li>
      <li>The integration of geographical and geological observations into maps marked the beginning of interdisciplinary studies that combined Earth sciences with exploration.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The Age of Exploration expanded humanity’s geographical and geological horizons, fostering a deeper appreciation of Earth’s physical diversity. It set the stage for modern Earth sciences, inspired the categorization of natural features, and advanced techniques in navigation and cartography. The discoveries made during this era continue to shape our understanding of the planet’s history and its dynamic processes.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Waldseemuller_map_2.jpg/1280px-Waldseemuller_map_2.jpg"
                alt="1507 World Map by Martin Waldseemüller"
              />
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Discovery of Natural Resources</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("naturalResources")}
            >
              {expandedSections.naturalResources ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.naturalResources && (
            <div className="section-content">
             <p>
  During the Age of Exploration and beyond, explorers documented the abundance of natural resources found across newly discovered territories, including minerals, metals, and fossil fuels. These discoveries not only fueled economic growth but also ignited scientific curiosity, leading to the early development of geology as a systematic field of study. The global exchange of resources and knowledge during this period laid the foundation for modern industries and Earth sciences.
</p>
<h3>Significant Findings:</h3>
<ul>
  <li>
    <strong>Gold and Silver Mines in the Americas:</strong>
    <ul>
      <li>The discovery of vast gold and silver deposits in regions like Potosí (modern-day Bolivia) and Mexico dramatically boosted Europe’s economy in the 16th and 17th centuries.</li>
      <li>These precious metals became the cornerstone of global trade, financing European empires and driving further exploration and colonization.</li>
      <li>The influx of gold and silver also spurred the development of mining technologies and early studies of mineral extraction processes.</li>
    </ul>
  </li>
  <li>
    <strong>Coal Deposits in Europe and North America:</strong>
    <ul>
      <li>Large coal deposits discovered in England, France, and the eastern United States laid the groundwork for the Industrial Revolution in the 18th and 19th centuries.</li>
      <li>Coal became a critical resource for powering steam engines, factories, and transportation, transforming economies and societies.</li>
      <li>Its widespread use also inspired studies of fossil fuels and the formation of sedimentary rock layers, advancing geological understanding of Earth's resources.</li>
    </ul>
  </li>
  <li>
    <strong>Gems and Precious Stones:</strong>
    <ul>
      <li>The discovery of diamonds in Brazil in the 18th century shifted the global center of diamond mining from India to South America, creating a lucrative trade and cultural fascination with gemstones.</li>
      <li>Emeralds, historically mined in India and Colombia, became symbols of wealth and power, gaining importance in European and Asian markets.</li>
      <li>The global demand for gemstones inspired early mineralogical studies, focusing on properties like hardness, clarity, and chemical composition.</li>
    </ul>
  </li>
</ul>
<h3>Impact on Geology:</h3>
<ul>
  <li>
    <strong>Inspiration for Mineral Classification:</strong>
    <ul>
      <li>The extraction and trade of minerals and metals led to efforts to systematically classify Earth’s resources based on their physical and chemical properties.</li>
      <li>Notable works, such as Georgius Agricola’s <i>De Re Metallica</i> (1556), laid the foundation for mineralogy by describing mining techniques and mineral characteristics in detail.</li>
    </ul>
  </li>
  <li>
    <strong>Early Theories of Earth's Formation:</strong>
    <ul>
      <li>Observations of mineral deposits, metal veins, and fossil fuels sparked early theories about Earth's formation and the underground processes that create these resources.</li>
      <li>Concepts such as the rock cycle and sedimentary deposition began to emerge as naturalists and miners sought to explain the origin and distribution of valuable materials.</li>
      <li>This period marked a shift from mythological explanations to scientific inquiry, forming the foundation of modern geology and resource management.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The documentation and exploitation of natural resources during the Age of Exploration and subsequent centuries played a pivotal role in shaping global economies and advancing geological science. By inspiring systematic studies of Earth's materials and processes, these discoveries not only fueled economic growth but also deepened humanity’s understanding of the planet’s composition and dynamics, paving the way for industrialization and scientific innovation.
</p>

              <img
                src="https://www.heart-in-diamond.com/wp-content/uploads/2019/02/kimberley-1064016_960_720.jpg"
                alt="Brazilian diamond mines"
              />
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>The Rise of Modern Geological Studies</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("modernGeology")}
            >
              {expandedSections.modernGeology ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.modernGeology && (
            <div className="section-content">
                <p>
  The Age of Exploration not only expanded humanity's geographical horizons but also kindled a deeper curiosity about Earth's processes and materials. This period marked the beginnings of geology as a scientific discipline, driven by the need to understand the natural world and its resources. Through the efforts of pioneering thinkers, the foundations of modern geology were established, transforming our understanding of Earth’s history and dynamics.
</p>
<h3>Key Developments:</h3>
<ul>
  <li>
    <strong>1546: Georgius Agricola’s <i>De Re Metallica</i>:</strong>
    <ul>
      <li>Georgius Agricola, often called the "Father of Mineralogy," published <i>De Re Metallica</i>, a comprehensive work on mining and the properties of minerals.</li>
      <li>This text detailed practical mining techniques, mineral classifications, and the economic importance of natural resources, bridging the gap between practical mining knowledge and scientific inquiry.</li>
      <li>Agricola’s systematic approach to studying minerals and their extraction laid the groundwork for mineralogy as a distinct field of study.</li>
    </ul>
  </li>
  <li>
    <strong>1669: Nicolas Steno’s Principles of Stratigraphy:</strong>
    <ul>
      <li>Nicolas Steno introduced key principles of stratigraphy, including the law of superposition, which states that in undisturbed rock layers, older layers lie beneath younger ones.</li>
      <li>Steno’s work also outlined the principle of original horizontality, describing how sedimentary layers are initially deposited in horizontal sheets, and the principle of lateral continuity, suggesting layers extend laterally over large areas.</li>
      <li>These principles provided a scientific framework for studying rock layers and interpreting Earth’s geological history.</li>
    </ul>
  </li>
  <li>
    <strong>1788: James Hutton’s Theory of Uniformitarianism:</strong>
    <ul>
      <li>James Hutton, often regarded as the "Father of Modern Geology," proposed the theory of uniformitarianism in his groundbreaking work, <i>The Theory of the Earth</i>.</li>
      <li>Hutton argued that the processes shaping Earth’s surface today, such as erosion, sedimentation, and volcanic activity, have operated consistently over vast periods of time.</li>
      <li>This concept challenged prevailing catastrophic views of Earth’s history and introduced the idea of "deep time," emphasizing that Earth’s geological changes occur gradually over millions of years.</li>
    </ul>
  </li>
</ul>
<h3>Legacy:</h3>
<ul>
  <li>
    <strong>Established Geology as a Scientific Discipline:</strong>
    <ul>
      <li>The contributions of Agricola, Steno, and Hutton helped formalize geology as a distinct field of study, separating it from speculative natural philosophy.</li>
      <li>Their work emphasized observation, evidence-based reasoning, and systematic methodologies, hallmarks of modern scientific practice.</li>
    </ul>
  </li>
  <li>
    <strong>Framework for Understanding Earth’s History:</strong>
    <ul>
      <li>Geological principles such as stratigraphy and uniformitarianism provided tools for interpreting rock records, revealing Earth’s dynamic history and evolution.</li>
      <li>These principles enabled geologists to reconstruct past environments, understand the formation of landscapes, and trace the history of life on Earth.</li>
    </ul>
  </li>
  <li>
    <strong>Influence on Later Geological Advancements:</strong>
    <ul>
      <li>The foundational ideas of stratigraphy and uniformitarianism inspired later breakthroughs, including the theory of plate tectonics, which explains the movement of Earth’s lithospheric plates.</li>
      <li>They also influenced the study of paleontology, enabling scientists to correlate fossil records with geological layers to understand the evolution of life.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The early developments in geology during and after the Age of Exploration marked a turning point in humanity’s understanding of Earth. By establishing systematic principles and methodologies, these pioneers not only laid the groundwork for modern Earth sciences but also transformed our view of the planet’s history and processes. Their legacy continues to shape scientific inquiry and discovery, driving our quest to understand the dynamic Earth.
</p>

              
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Charles_Lyell_-_Pillars_of_Pozzuoli.jpg"
                alt="Principles of Geology by James Hutton"
              />
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The Age of Exploration revolutionized our understanding of Earth's geography and natural resources. It laid the foundation for modern geology and inspired a deeper exploration of our planet.
        </p>
        <Link to="/science/physical/earth" className="back-link">
          Back to Earth Sciences
        </Link>
      </footer>
    </div>
  );
};

export default AgeOfExploration;
