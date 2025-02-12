import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const AncientGeology = () => {
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
        <h1>Ancient Geology: The Foundations of Earth Science</h1>
        <p>
          Explore how ancient civilizations, from the Babylonians to the Chinese, interpreted natural phenomena like earthquakes and volcanoes, and began classifying minerals and rocks. 
          Their observations laid the groundwork for the modern study of geology.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Mythology and Early Interpretations</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("mythology")}
            >
              {expandedSections.mythology ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.mythology && (
            <div className="section-content">
             <p>
  In ancient times, natural phenomena such as earthquakes, volcanoes, and floods were often explained through myths and legends involving gods or mythical creatures. These stories served not only to provide explanations for seemingly unpredictable events but also to reinforce cultural beliefs, traditions, and identities. By connecting geological events to divine actions or supernatural beings, ancient cultures sought to understand their environment and make sense of the forces shaping their world.
</p>
<h3>Examples from Ancient Cultures:</h3>
<ul>
  <li>
    <strong>Greece:</strong> 
    <ul>
      <li>In Greek mythology, earthquakes were attributed to Poseidon, the god of the sea, earthquakes, and horses. Known as the "Earth-Shaker," Poseidon was believed to cause tremors by striking the ground with his mighty trident when angered.</li>
      <li>These myths reflected the Greeks’ view of the gods as powerful, unpredictable forces of nature, emphasizing the importance of appeasing Poseidon through rituals and offerings to avoid his wrath.</li>
    </ul>
  </li>
  <li>
    <strong>Rome:</strong> 
    <ul>
      <li>Romans associated volcanic activity, such as the eruptions of Mount Vesuvius, with Vulcan, the god of fire, volcanoes, and metalworking. Vulcan’s forge, located beneath the Earth, was thought to produce the intense heat and molten rock of volcanic eruptions.</li>
      <li>The eruption of Vesuvius in 79 CE, which destroyed Pompeii and Herculaneum, was later interpreted as a manifestation of Vulcan’s power, underscoring the Romans’ belief in the divine control of natural phenomena.</li>
    </ul>
  </li>
  <li>
    <strong>Japan:</strong> 
    <ul>
      <li>In Japanese folklore, earthquakes were believed to be caused by Namazu, a giant catfish that lived beneath the Earth. Namazu was said to thrash about, causing the ground to shake violently.</li>
      <li>Kashima, a god responsible for controlling Namazu, was believed to restrain the catfish with a large stone. When Kashima’s vigilance waned, Namazu would break free, resulting in earthquakes.</li>
      <li>This myth was deeply embedded in Japanese culture and inspired various artworks and rituals to honor Kashima and prevent Namazu’s destructive movements.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  These myths highlight the ways in which ancient cultures sought to interpret and cope with natural disasters, linking the physical world to their spiritual and religious beliefs. By attributing geological phenomena to divine or mythical causes, these stories provided a framework for understanding the unknown and reinforced the cultural values and identities of their societies. While modern science has replaced these explanations with evidence-based theories, the myths remain an important part of cultural history, offering insights into how ancient people perceived their relationship with nature.
</p>

              <img
                src="https://the-public-domain-review.imgix.net/collections/earthquakes-in-japanese-woodblock-prints/NDL-DC-10.jpg?fit=max&w=1200&h=850&auto=format,compress"
                alt="Japanese woodblock print of Namazu, the earthquake-causing catfish"
              />
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Early Classification of Rocks and Minerals</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("classification")}
            >
              {expandedSections.classification ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.classification && (
            <div className="section-content">
             <p>
  Ancient civilizations laid the groundwork for mineralogy by classifying rocks and minerals based on their physical properties, appearance, and practical applications. This early understanding of geology was closely tied to everyday life, as materials were used for tool-making, construction, artistic expression, and ceremonial purposes. Their observations and classifications often reflected both scientific curiosity and cultural significance.
</p>
<h3>Notable Contributions:</h3>
<ul>
  <li>
    <strong>Egyptians:</strong> 
    <ul>
      <li>Egyptians distinguished between various precious and semi-precious stones, valuing them for their beauty, rarity, and symbolic meanings.</li>
      <li>Lapis lazuli, imported from Afghanistan, was prized for its deep blue color and was often used in jewelry, amulets, and tomb decorations. It was associated with the heavens and divine favor.</li>
      <li>Turquoise, mined from the Sinai Peninsula, and emeralds, sourced locally, were used in adornments and religious artifacts, symbolizing protection and eternal life.</li>
      <li>Minerals like limestone and granite were extensively used in construction, exemplified by the Great Pyramids and temples, showcasing their advanced knowledge of materials and their properties.</li>
    </ul>
  </li>
  <li>
    <strong>Babylonians:</strong>
    <ul>
      <li>The Babylonians created one of the earliest known catalogs of minerals, meticulously describing their characteristics such as color, texture, and hardness.</li>
      <li>They used this knowledge for practical purposes, including constructing durable structures and creating tools and weapons.</li>
      <li>Their understanding of materials also extended to lapidary work, crafting intricate seals and ornaments from stones like agate and carnelian, which held cultural and commercial significance.</li>
    </ul>
  </li>
  <li>
    <strong>Chinese:</strong> 
    <ul>
      <li>The Chinese revered jade as a symbol of purity, immortality, and virtue. Known as the "stone of heaven," jade was extensively used in carvings, ornaments, and ritual objects.</li>
      <li>Jade was believed to possess protective and spiritual properties, playing a significant role in burial customs, where jade burial suits were crafted for emperors and elites.</li>
      <li>Chinese artisans developed sophisticated techniques for working jade, demonstrating a deep understanding of its unique properties, such as its toughness and translucence.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The early classification and use of rocks and minerals by ancient civilizations reflect the integration of scientific observation with cultural and practical needs. Their knowledge contributed to advancements in technology, art, and architecture, forming a foundation for modern geology and material science. These contributions also highlight the enduring relationship between human societies and the natural materials that shape their environments and cultures.
</p>

              <img
                src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/544630/1324934/main-image"
                alt="Stringing and drilling beads, Tomb of Rekhmire"
              />
              <h3>Impact on Modern Geology:</h3>
<ul>
  <li>
    <strong>Inspiration for Systematic Classification:</strong>
    <ul>
      <li>The early efforts of ancient civilizations to classify minerals based on their physical properties and uses laid the groundwork for systematic categorization in modern geology.</li>
      <li>Greek and Roman scholars, such as Theophrastus and Pliny the Elder, expanded upon earlier classifications, documenting observations of minerals and rocks in their natural contexts.</li>
      <li>These early classifications evolved into more scientific approaches during the Renaissance and Enlightenment, eventually leading to the modern mineral classification system based on chemical composition and crystalline structure.</li>
    </ul>
  </li>
  <li>
    <strong>Legacy of Ancient Terms:</strong>
    <ul>
      <li>Many terms for minerals and rocks coined by ancient cultures are still in use today, reflecting their lasting influence on geological science.</li>
      <li>For example:
        <ul>
          <li>The term "quartz" derives from ancient Germanic languages, referring to one of the most abundant and widely recognized minerals in Earth's crust.</li>
          <li>"Jade," a term originating from Spanish explorers, was influenced by the significance of the mineral in Chinese and Mesoamerican cultures.</li>
          <li>Other terms like "marble" (from the Greek *marmaros*, meaning "shining stone") highlight the historical and aesthetic value attributed to certain rocks.</li>
        </ul>
      </li>
      <li>These enduring names serve as a bridge between ancient knowledge and modern scientific practices, honoring the contributions of early societies to the field of geology.</li>
    </ul>
  </li>
</ul>


            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Earthquakes and Volcanoes in Ancient Thought</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("earthquakesVolcanoes")}
            >
              {expandedSections.earthquakesVolcanoes ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.earthquakesVolcanoes && (
            <div className="section-content">
              <p>
  Ancient peoples closely observed geological phenomena such as earthquakes and volcanic eruptions, seeking to understand their causes and effects. While their explanations were often rooted in mythology or philosophical speculation, many of their observations demonstrated remarkable insight into natural processes. These early efforts to make sense of Earth's dynamic nature laid the groundwork for modern geological sciences.
</p>
<h3>Key Observations:</h3>
<ul>
  <li>
    <strong>Chinese Innovation – The First Seismoscope:</strong>
    <ul>
      <li>In 132 CE, the Chinese polymath Zhang Heng invented the first known seismoscope, a device designed to detect distant earthquakes.</li>
      <li>The seismoscope featured a bronze vessel with dragon heads facing eight cardinal directions. When an earthquake occurred, a ball would drop from a dragon’s mouth into the mouth of a toad below, indicating the direction of the seismic waves.</li>
      <li>This invention demonstrated an early understanding of seismic activity and its propagation, showcasing the ingenuity of ancient Chinese scientists in observing and interpreting natural events.</li>
    </ul>
  </li>
  <li>
    <strong>Greek Philosophical Speculations:</strong>
    <ul>
      <li>Greek philosophers, including Aristotle, theorized that earthquakes were caused by winds trapped within underground caverns. When these winds sought an escape, the ground would shake.</li>
      <li>While scientifically incorrect, this hypothesis reflected an attempt to connect observed phenomena (like wind and air pressure) to the causes of earthquakes.</li>
      <li>Such speculative efforts illustrate the Greeks' commitment to seeking natural explanations for geological events, moving away from purely mythological interpretations.</li>
    </ul>
  </li>
  <li>
    <strong>Roman Observations of Volcanic Activity:</strong>
    <ul>
      <li>Romans, particularly those living near active volcanoes like Mount Vesuvius, noted that volcanic eruptions were often preceded by tremors and changes in local geological conditions.</li>
      <li>The eruption of Vesuvius in 79 CE, which buried Pompeii and Herculaneum, provided firsthand evidence of the connection between seismic activity and volcanic eruptions.</li>
      <li>This observation aligns with modern geological understanding, which recognizes that earthquakes and ground deformation often precede volcanic eruptions as magma moves beneath the surface.</li>
    </ul>
  </li>
</ul>


              <img
                src="https://img.atlasobscura.com/nG2q90AFyjSTqM0dAaUafBo9bI9atfnrdnE3WYgySHY/rt:fit/w:1200/q:80/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8xZGU3/YjVlMS00ZjlmLTRh/MzMtODE2My1jOGY3/ODU4NzBjNWQ4Mjdh/YWVlODEyMGIyOWY1/NzhfRkJfSU1HXzE2/MDc2NzQzODQzNjMu/anBn.webp"
                alt="Replica of Zhang Heng's ancient seismoscope"
              />
             <h3>Applications:</h3>
<ul>
  <li>
    <strong>Influence on Settlement Patterns:</strong>
    <ul>
      <li>Ancient civilizations often adjusted their settlement locations based on their understanding of natural disasters. For example:
        <ul>
          <li>In regions prone to frequent volcanic activity, such as around Mount Vesuvius or Mount Etna, some communities chose to settle farther from volcanoes after observing the devastation caused by eruptions.</li>
          <li>Similarly, areas with frequent earthquakes were sometimes avoided or required special construction techniques to minimize damage, such as reinforced walls and foundations.</li>
        </ul>
      </li>
      <li>However, the fertile soils created by volcanic activity, such as those around the Nile Delta or in southern Italy, often attracted settlers despite the risks, demonstrating a balance between utilizing natural resources and managing dangers.</li>
    </ul>
  </li>
  <li>
    <strong>Foundation for Modern Geological Sciences:</strong>
    <ul>
      <li>Early observations of earthquakes and volcanoes provided the first step toward systematic scientific study, influencing the development of fields such as plate tectonics and volcanology.</li>
      <li>The recognition of patterns, such as seismic activity preceding eruptions or the clustering of earthquakes in certain regions, laid the groundwork for modern theories about Earth's crust and mantle dynamics.</li>
      <li>These ancient insights evolved over centuries into the modern understanding of tectonic plate movements, the causes of earthquakes, and the processes driving volcanic eruptions.</li>
    </ul>
  </li>
</ul>

            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          Ancient geology reflects humanity's early attempts to understand the Earth. While steeped in mythology, these efforts laid the groundwork for the systematic study of Earth's processes and materials in modern geology.
        </p>
        <Link to="/science/physical/earth" className="back-link">
          Back to Earth Sciences
        </Link>
      </footer>
    </div>
  );
};

export default AncientGeology;
