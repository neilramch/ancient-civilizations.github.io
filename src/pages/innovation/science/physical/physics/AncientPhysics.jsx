import React, { useState } from "react";
import "./AncientPhysics.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const AncientPhysics = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="ancient-physics-container">
      <header className="ancient-physics-header">
        <h1>Ancient Physics: The Foundations of Natural Philosophy (c. 600 BCE – 500 CE)</h1>
        <p>
          Explore the origins of physics, from the early observations of nature by ancient civilizations to the philosophical contributions of great thinkers like Aristotle and Archimedes.
        </p>
      </header>

      <main className="ancient-physics-main">
        <section className="topic">
          <div className="section-header">
            <h2>The Beginnings of Natural Philosophy</h2>
            <button 
              className="expand-button" 
              onClick={() => toggleSection("naturalPhilosophy")}
            >
              {expandedSections.naturalPhilosophy ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.naturalPhilosophy && (
            <div className="section-content">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/Hindu-arabic1.jpg" 
                alt="Hindu-Arabic numeral system" 
              />
             <p>
  The Hindu-Arabic numeral system, developed by Indian mathematicians and later transmitted to the Islamic world and Europe, revolutionized mathematical computation. The inscriptions on the edicts of Emperor Ashoka (3rd century BCE) show early use of this system by the Imperial Mauryas, facilitating administrative efficiency and trade. This numerical system laid the groundwork for advanced mathematics, which would, in turn, support future developments in physics and astronomy.
</p>
<p>
  Ancient physics was not recognized as a separate science but was deeply intertwined with natural philosophy. This early framework sought to explain the workings of the universe without resorting to mythological narratives, emphasizing observation, reasoning, and practical applications. Civilizations such as the Egyptians, Babylonians, and Greeks were instrumental in shaping the foundations of physics through their innovative approaches to understanding nature.
</p>
<h3>Contributions from Early Civilizations:</h3>
<ul>
  <li>
    <strong>Egyptians and Babylonians:</strong> Practical applications of physics principles are evident in their monumental architecture and tools:
    <ul>
      <li>
        The construction of the pyramids demonstrated a sophisticated understanding of geometry and the use of inclined planes, levers, and pulleys to move massive stones.
      </li>
      <li>
        Babylonian astronomers created detailed star charts and predicted celestial events, showcasing early attempts to link mathematics with natural phenomena.
      </li>
    </ul>
  </li>
  <li>
    <strong>Pre-Socratic Thinkers:</strong> Philosophers like Thales of Miletus (c. 624–546 BCE) and Anaximander (c. 610–546 BCE) introduced groundbreaking ideas about the natural world:
    <ul>
      <li>
        Thales proposed that water was the fundamental substance of all matter, shifting explanations of nature from myth to physical principles.
      </li>
      <li>
        Anaximander suggested the concept of the "apeiron" (infinite or boundless) as the origin of all things and created one of the earliest known cosmological models.
      </li>
    </ul>
  </li>
  <li>
    <strong>Indian Contributions:</strong> Ancient Indian scholars like Aryabhata (476–550 CE) and Brahmagupta (598–668 CE) made significant advances:
    <ul>
      <li>
        Aryabhata's work in astronomy included calculations of planetary motions and the realization that the Earth rotates on its axis.
      </li>
      <li>
        Brahmagupta's treatise on mathematics introduced rules for zero and negative numbers, concepts crucial for later developments in algebra and physics.
      </li>
    </ul>
  </li>
  <li>
    <strong>Chinese Innovations:</strong> The ancient Chinese developed practical tools and scientific concepts:
    <ul>
      <li>
        The invention of the seismograph by Zhang Heng (78–139 CE) to detect earthquakes showed an early understanding of mechanical systems.
      </li>
      <li>
        The concept of yin and yang influenced the Chinese view of natural balance and forces in the universe.
      </li>
    </ul>
  </li>
</ul>
<p>
  These early contributions laid the groundwork for the systematic study of nature, blending practical applications with philosophical inquiry. They demonstrated humanity's enduring quest to understand the universe, shaping the trajectory of scientific thought for millennia.
</p>

            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Aristotle and His Influence</h2>
            <button 
              className="expand-button" 
              onClick={() => toggleSection("aristotle")}
            >
              {expandedSections.aristotle ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.aristotle && (
            <div className="section-content">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Aristotle%27s_laws_of_motion.svg/1280px-Aristotle%27s_laws_of_motion.svg.png" 
                alt="Aristotle's laws of motion" 
              />
             <p>
    Aristotle (384–322 BCE), one of the most influential philosophers in history, formalized natural philosophy into a systematic discipline. His theories encompassed motion, causality, and the structure of the cosmos, profoundly shaping scientific thought for centuries. Although later replaced by more accurate models, Aristotle's work provided a framework that dominated the intellectual landscape of the ancient and medieval world.
  </p>
  <h3>Key Contributions to Natural Philosophy:</h3>
  <ul>
    <li>
      <strong>The Four Elements:</strong> Aristotle proposed that all matter was composed of four fundamental elements—earth, water, air, and fire—each associated with specific natural qualities (hot, cold, wet, and dry).
      <ul>
        <li>
          This theory influenced alchemy and early chemistry until the rise of atomic theory in modern times.
        </li>
      </ul>
    </li>
    <li>
      <strong>Geocentric Cosmology:</strong> Aristotle envisioned a universe with the Earth at its center (geocentrism), surrounded by concentric celestial spheres carrying the Moon, Sun, planets, and stars.
      <ul>
        <li>
          This model became the foundation for the Ptolemaic system, which persisted until the Copernican Revolution in the 16th century.
        </li>
      </ul>
    </li>
    <li>
      <strong>Natural and Violent Motion:</strong> Aristotle distinguished between two types of motion:
      <ul>
        <li>
          <strong>Natural Motion:</strong> Objects move toward their natural place (e.g., heavy objects fall to Earth, fire rises toward the heavens).
        </li>
        <li>
          <strong>Violent Motion:</strong> External forces cause unnatural movement, such as pushing or pulling an object.
        </li>
      </ul>
    </li>
    <li>
      <strong>Causality:</strong> Aristotle introduced the concept of four causes to explain why things exist or occur:
      <ul>
        <li><strong>Material Cause:</strong> The substance or matter from which something is made.</li>
        <li><strong>Formal Cause:</strong> The shape or design that defines the object.</li>
        <li><strong>Efficient Cause:</strong> The agent or process that brings the object into being.</li>
        <li><strong>Final Cause:</strong> The purpose or goal for which the object exists.</li>
      </ul>
    </li>
  </ul>
  <h3>Aristotle’s Influence on Motion and Physics:</h3>
  <p>
    Aristotle's laws of motion, while incorrect by modern standards, dominated scientific thought for nearly 2,000 years. He believed that heavier objects fell faster than lighter ones, a view later disproven by Galileo. Aristotle also asserted that continuous motion required a constant force, overlooking the concept of inertia introduced by Newton.
  </p>
  <h3>Aristotle’s Legacy:</h3>
  <ul>
    <li>
      <strong>Medieval Scholasticism:</strong> Aristotle’s works, preserved and expanded upon by Islamic scholars like Averroes and Avicenna, were reintroduced to Europe during the 12th-century Renaissance. His ideas formed the basis of scholasticism, blending philosophy with theology.
    </li>
    <li>
      <strong>Foundation for Scientific Inquiry:</strong> Although many of his theories were ultimately proven incorrect, Aristotle’s emphasis on observation, categorization, and logical reasoning laid the groundwork for the scientific method.
    </li>
    <li>
      <strong>Impact on Philosophy:</strong> Aristotle's metaphysical concepts of substance, potentiality, and actuality influenced later philosophers such as Thomas Aquinas and Immanuel Kant.
    </li>
  </ul>
  <h3>Critiques and Evolution of His Ideas:</h3>
  <p>
    Despite his monumental influence, Aristotle’s scientific ideas faced criticism as empirical methods advanced. Galileo’s experiments on motion and Copernicus’s heliocentric model challenged the Aristotelian worldview, initiating a scientific revolution. Nonetheless, Aristotle’s approach to understanding nature through systematic reasoning remains a cornerstone of intellectual history.
  </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Archimedes and Applied Physics</h2>
            <button 
              className="expand-button" 
              onClick={() => toggleSection("archimedes")}
            >
              {expandedSections.archimedes ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.archimedes && (
            <div className="section-content">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Domenico-Fetti_Archimedes_1620.jpg/1280px-Domenico-Fetti_Archimedes_1620.jpg" 
                alt="Domenico Fetti's Archimedes, 1620" 
              />
              <p>
    Archimedes (287–212 BCE), a Greek mathematician, engineer, and inventor, is celebrated as one of the greatest minds of antiquity. His contributions to applied physics, geometry, and mechanics were unparalleled, laying the foundation for modern engineering and physical sciences.
  </p>
  <h3>Key Contributions:</h3>
  <ul>
    <li>
      <strong>Principle of Buoyancy:</strong> Archimedes discovered the principle of buoyancy, which states that a body submerged in a fluid experiences an upward force equal to the weight of the fluid it displaces.
      <ul>
        <li>
          This principle is famously associated with his exclamation "Eureka!" while stepping into a full bathtub and realizing the displaced water could measure volume.
        </li>
        <li>
          It revolutionized the design of ships and is foundational in fluid mechanics.
        </li>
      </ul>
    </li>
    <li>
      <strong>Levers and Mechanical Advantage:</strong> Archimedes systematically studied levers and is credited with the statement, "Give me a place to stand, and I will move the Earth."
      <ul>
        <li>
          He demonstrated how levers could amplify force, forming the basis of modern mechanics.
        </li>
        <li>
          His studies extended to pulleys, allowing heavy loads to be lifted with minimal effort.
        </li>
      </ul>
    </li>
    <li>
      <strong>The Archimedean Screw:</strong> Invented to raise water for irrigation and drainage, this device consists of a spiral inside a cylinder and is still in use today.
      <ul>
        <li>
          It provided a practical solution to agricultural and engineering challenges in the ancient world.
        </li>
      </ul>
    </li>
    <li>
      <strong>Mathematical Contributions:</strong> Archimedes used geometry to calculate areas, volumes, and surface areas of various shapes.
      <ul>
        <li>
          He approximated the value of pi with remarkable precision.
        </li>
        <li>
          His treatise <i>On the Sphere and Cylinder</i> explored the relationships between the volumes and surface areas of spheres and cylinders.
        </li>
      </ul>
    </li>
    <li>
      <strong>War Machines and Defense Mechanisms:</strong> Archimedes designed innovative war machines to defend his home city of Syracuse during the Roman siege.
      <ul>
        <li>
          He created catapults capable of launching large projectiles at enemy ships.
        </li>
        <li>
          Legend credits him with inventing a system of mirrors to set Roman ships on fire, though this claim remains debated.
        </li>
      </ul>
    </li>
  </ul>
  <h3>Archimedes' Writings:</h3>
  <p>
    Much of what we know about Archimedes comes from his writings, which include:
  </p>
  <ul>
    <li>
      <i>On Floating Bodies:</i> A treatise that systematically explains buoyancy and the principles of hydrostatics.
    </li>
    <li>
      <i>The Method of Mechanical Theorems:</i> An exploration of his use of mechanics to solve mathematical problems.
    </li>
    <li>
      <i>Measurement of a Circle:</i> A work in which Archimedes approximates the value of pi.
    </li>
    <li>
      <i>On the Equilibrium of Planes:</i> A study of centers of gravity and the theory of levers.
    </li>
  </ul>
  <h3>Legacy and Influence:</h3>
  <ul>
    <li>
      Archimedes' principles of mechanics laid the groundwork for Renaissance scientists like Galileo and Leonardo da Vinci.
    </li>
    <li>
      His mathematical insights inspired future developments in calculus by Newton and Leibniz.
    </li>
    <li>
      Archimedes’ work continues to be a cornerstone in modern engineering, hydrodynamics, and materials science.
    </li>
    <li>
      His innovative approach to problem-solving exemplifies the enduring intersection of theoretical and applied science.
    </li>
  </ul>
  <h3>Final Years and Legacy:</h3>
  <p>
    Archimedes met a tragic end during the Roman conquest of Syracuse in 212 BCE. Despite orders to spare him, he was killed by a Roman soldier. His contributions, however, endure as a testament to the ingenuity and curiosity of the human spirit.
  </p>
            </div>
          )}
        </section>
      </main>

      <footer className="ancient-physics-footer">
        <p>
          Ancient physics reminds us of humanity’s enduring curiosity about the universe. From simple observations to profound theories, these early contributions continue to shape our understanding of nature.
        </p>
        <Link to="/science/physical/physics" className="back-link">Back to Physics</Link>
      </footer>
    </div>
  );
};

export default AncientPhysics;
