import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import './Physical.css'; // Optional: Custom styles
import Section from "../../../../components/Section";

const Physical = () => {
  return (
    <div className="physical-science-container">
      <header className="physical-science-header">
        <h1>Physical Sciences</h1>
        <p>
          Dive into the wonders of physics, chemistry, and astronomy. Explore the discoveries that shape our understanding of the physical universe.
        </p>
      </header>

      <main className="physical-science-main">
        <Section
          title="Physics"
          description="Learn about key discoveries in mechanics, thermodynamics, electromagnetism, quantum theory, and more."
          link="/science/physical/physics"
          image="/apple.svg"
        />
        <Section
          title="Chemistry"
          description="Explore chemical reactions, periodic table discoveries, organic chemistry, and the principles of matter."
          link="/science/physical/chemistry"
          image="/chemistry.svg"
        />
        <Section
          title="Astronomy"
          description="Discover the cosmos—planets, stars, galaxies, and the vast expanse of the universe."
          link="/science/physical/astronomy"
          image="/astronaut.svg"
        />
        <Section
          title="Earth Sciences"
          description="Delve into the geology and natural phenomena that explain Earth's physical properties."
          link="/science/physical/earth"
          image="/earth-science.svg"
        />
        {/* Add more sections as needed */}
      </main>

    
    </div>
  );
};

export default Physical;
