import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../module.css"; // Optional: Custom styles

const AncientBiology = () => {
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
        <h1>Ancient Biology: Observing Life in the Ancient World</h1>
        <p>
          (c. 400 BCE – 1500 CE) Discover the early observations of life by thinkers like Aristotle and how ancient civilizations categorized plants and animals.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>Aristotle's Contributions</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("aristotle")}
            >
              {expandedSections.aristotle ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.aristotle && (
            <div className="section-content">
              <p>
                Aristotle (384–322 BCE) is often regarded as the "Father of Biology." He was the first to systematically study and classify living organisms based on their structure and function.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Two_of_Aristotle%27s_Growth_Laws.svg/1280px-Two_of_Aristotle%27s_Growth_Laws.svg.png"
              />
              <p className="caption">Aristotle inferred growth laws from his observations on animals, including that brood size decreases with body mass, whereas gestation period increases. He was correct in these predictions, at least for mammals: data are shown for mouse and elephant.</p>
              <h3>Key Contributions:</h3>
<ul>
  <li>
    <strong>Classification of Animals:</strong>
    <ul>
      <li>Aristotle categorized animals into two primary groups: those with blood (<i>enaima</i>) and those without blood (<i>anaima</i>), which correspond closely to modern classifications of vertebrates and invertebrates.</li>
      <li>This binary classification system was one of the earliest attempts to systematically organize the diversity of life based on observable traits.</li>
    </ul>
  </li>
  <li>
    <strong>Comparative Anatomy:</strong>
    <ul>
      <li>Through detailed dissections, Aristotle studied the anatomy of various animals, comparing their structures to understand their functions and relationships.</li>
      <li>His work laid the foundation for the field of comparative anatomy, influencing later scientists like Galen and Vesalius.</li>
    </ul>
  </li>
  <li>
    <strong>Extensive Documentation of Species:</strong>
    <ul>
      <li>Aristotle observed and documented the characteristics, habitats, reproductive behaviors, and ecological roles of over 500 species, including marine life, birds, and mammals.</li>
      <li>His work, particularly in marine biology, provided detailed descriptions of species like cephalopods, which remained scientifically relevant for centuries.</li>
    </ul>
  </li>
  <li>
    <strong>Concept of the "Scala Naturae":</strong>
    <ul>
      <li>Aristotle proposed the "Scala Naturae" or "Great Chain of Being," a hierarchical framework that arranged living organisms from the simplest to the most complex forms of life.</li>
      <li>This concept reflected his belief in a natural order and continuity of life, influencing medieval and Renaissance thought on biology and philosophy.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Aristotle’s contributions to biology were rooted in meticulous observation and logical reasoning, setting a precedent for empirical scientific methods. His classification systems and anatomical studies formed the cornerstone of biological sciences for centuries, influencing scholars across the ancient, medieval, and early modern periods. The enduring impact of his work underscores the importance of systematic observation and documentation in understanding the natural world.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Herbal Medicine</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("herbalMedicine")}
            >
              {expandedSections.herbalMedicine ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.herbalMedicine && (
            <div className="section-content">
              <p>
                Ancient civilizations, from the Egyptians to the Chinese, utilized plants for medicinal purposes. Their knowledge formed the basis of traditional medicine.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Papyrus_Ebers.png"
              />
              <p className="caption">The treatment for asthma suggested in the Ebers papyrus is a mixture of herbs heated on a brick so that the patient could inhale their fumes</p>
              <h3>Notable Texts and Traditions:</h3>
<ul>
  <li>
    <strong>Egyptians:</strong>
    <ul>
      <li>The <i>Ebers Papyrus</i> (c. 1500 BCE) is one of the oldest and most comprehensive medical texts, containing over 700 remedies and prescriptions.</li>
      <li>Egyptians utilized plants like garlic for boosting immunity and treating infections, and juniper for its antiseptic and diuretic properties.</li>
      <li>The text reflects a blend of practical treatments and spiritual practices, highlighting the dual role of medicine and ritual in ancient Egyptian healing traditions.</li>
    </ul>
  </li>
  <li>
    <strong>Chinese:</strong>
    <ul>
      <li>The <i>Shennong Bencao Jing</i> (The Divine Farmer’s Materia Medica), compiled around the 1st century CE, is a foundational text in traditional Chinese medicine.</li>
      <li>It classified 365 medicinal substances, including herbs, minerals, and animal products, into categories based on their properties and effects.</li>
      <li>Notable herbs like ginseng (for energy and vitality) and ephedra (for respiratory ailments) were described, emphasizing the holistic approach of Chinese medicine.</li>
    </ul>
  </li>
  <li>
    <strong>Greeks and Romans:</strong>
    <ul>
      <li>Dioscorides’ <i>De Materia Medica</i> (1st century CE) was an encyclopedic work documenting the medicinal uses of over 600 plants, along with descriptions of minerals and animal products.</li>
      <li>This text became a cornerstone of herbal medicine in Europe and the Islamic world for over 1,500 years, forming the basis for pharmacology during the medieval and Renaissance periods.</li>
      <li>Dioscorides’ emphasis on empirical observation and detailed descriptions influenced medical and botanical studies for centuries.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Herbal medicine was integral to ancient societies, combining empirical knowledge with cultural and spiritual beliefs. Texts like the <i>Ebers Papyrus</i>, <i>Shennong Bencao Jing</i>, and <i>De Materia Medica</i> reflect the universal reliance on plants for healing and the systematic effort to document and classify natural remedies. These works laid the foundation for modern pharmacology, demonstrating the enduring value of traditional medicine in understanding the therapeutic potential of nature.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Medieval Bestiaries</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("bestiaries")}
            >
              {expandedSections.bestiaries ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.bestiaries && (
            <div className="section-content">
              <p>
                Bestiaries were illustrated manuscripts that described animals, both real and mythical, often with moral or religious symbolism.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/RochesterBestiaryFolio007rLeopard.jpg"
                alt="Medieval Bestiary Illustration"
              />
              <p className="caption">"The Leopard" from the 13th-century bestiary known as the "Rochester Bestiary"</p>
              <h3>Key Features:</h3>
<ul>
  <li>
    <strong>Blending of Real and Mythical Creatures:</strong>
    <ul>
      <li>Bestiaries included depictions of both real animals, such as lions and eagles, and mythical creatures, such as unicorns and dragons.</li>
      <li>Descriptions often combined observable behaviors of real animals with symbolic interpretations, making each creature a vessel for moral or spiritual lessons.</li>
      <li>For example, the lion was associated with Christ, symbolizing resurrection, while the unicorn represented purity and the virgin birth.</li>
    </ul>
  </li>
  <li>
    <strong>Reflection of the Medieval Worldview:</strong>
    <ul>
      <li>Nature was perceived as a divine creation, where every animal and plant held a specific place and purpose designed by God.</li>
      <li>Bestiaries illustrated the idea of a harmonious universe, where the natural world was imbued with spiritual meaning and lessons for humanity.</li>
      <li>This perspective reinforced the belief that studying nature was a way to understand divine wisdom and order.</li>
    </ul>
  </li>
  <li>
    <strong>Educational Purpose:</strong>
    <ul>
      <li>Bestiaries served as educational tools, teaching Christian virtues, morality, and natural history through allegory and storytelling.</li>
      <li>The texts were often used by clergy and educators to convey moral lessons, drawing parallels between animal behaviors and human virtues or vices.</li>
      <li>Illustrations, richly detailed and often illuminated, helped to captivate readers and reinforce the lessons within the text.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Bestiaries are remarkable artifacts of medieval culture, reflecting the intersection of science, art, and theology. They reveal how medieval societies understood the natural world through a lens of spirituality and symbolism, blending empirical observations with allegorical interpretations. As both works of art and educational texts, bestiaries continue to provide insight into the values, beliefs, and intellectual traditions of the Middle Ages, illustrating the enduring human quest to find meaning in nature.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Ancient Taxonomy</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("taxonomy")}
            >
              {expandedSections.taxonomy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.taxonomy && (
            <div className="section-content">
              <p>
                Ancient scholars attempted to categorize life forms long before the development of modern taxonomy.
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Aristotle_Theophrastus_Strato_Lebiedzki_Rahl.jpg"
              />
              <p className="caption">Aristotle, Theophrastus, and Strato of Lampsacus. Part of a fresco in the portico of the University of Athens painted by Carl Rahl, c. 1888.</p>
              <h3>Key Figures and Systems:</h3>
<ul>
  <li>
    <strong>Aristotle:</strong>
    <ul>
      <li>Often considered the first taxonomist, Aristotle grouped animals based on their habitats (land, sea, air) and physical characteristics, such as the presence or absence of blood (<i>enaima</i> and <i>anaima</i>).</li>
      <li>His classification system, though rudimentary, introduced the idea of organizing organisms into hierarchical categories based on observable traits.</li>
      <li>Aristotle’s emphasis on empirical observation influenced later thinkers and laid a foundation for the scientific study of living organisms.</li>
    </ul>
  </li>
  <li>
    <strong>Theophrastus:</strong>
    <ul>
      <li>Known as the "Father of Botany," Theophrastus was a student of Aristotle and focused on the classification of plants.</li>
      <li>In his works, such as <i>Enquiry into Plants</i> and <i>On the Causes of Plants</i>, he categorized plants based on their uses (medicinal, agricultural, ornamental) and physical characteristics (e.g., size, lifespan, and habitat).</li>
      <li>Theophrastus’ work represented one of the earliest systematic efforts to study and classify plants, setting the stage for botanical sciences.</li>
    </ul>
  </li>
  <li>
    <strong>Indian Scholars:</strong>
    <ul>
      <li>Ancient Sanskrit texts, such as the <i>Vrikshayurveda</i> ("Science of Trees"), demonstrated a sophisticated understanding of plant taxonomy and agriculture.</li>
      <li>The text classified plants based on their medicinal properties, ecological roles, and uses in agriculture, including techniques for planting, irrigation, and pest control.</li>
      <li>Indian scholars also recognized the interdependence of plants and the environment, emphasizing sustainable practices long before modern ecological sciences.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The classification systems developed by Aristotle, Theophrastus, and Indian scholars represent humanity's earliest attempts to understand and organize the natural world. These efforts combined empirical observation with practical applications, such as medicine and agriculture, reflecting the diverse approaches to taxonomy across cultures. Their work laid a critical foundation for later advancements, including Carl Linnaeus’ binomial classification system in the 18th century, which formalized taxonomy into the scientific discipline we know today.
</p>

            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          Ancient biology reveals humanity's early curiosity and efforts to understand the natural world. These observations laid the foundation for modern science.
        </p>
        <Link to="/science/life/biology" className="back-link">
          Back to Biology
        </Link>
      </footer>
    </div>
  );
};

export default AncientBiology;
