// Life Sciences
// Learn about biology, ecology, and zoology and their impact on life as we know it.

import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import './LifeScience.css'; // Optional: Custom styles
import Section from "../../../../components/Section";

const Life = () => {
  return (
    <div className="life-science-container">
      <header className="life-science-header">
        <h1>Life Sciences</h1>
        <p>
          Learn about biology, ecology, and zoology and their impact on life as we know it.
        </p>
      </header>

      <main className="life-science-main">
        <Section
          title="Biology"
          description="Explore the study of living organisms, cellular structures, genetics, and biological processes."
          link="/science/life/biology"
          image="/cell.svg"
        />
        <Section
          title="Ecology"
          description="Understand ecosystems, environmental interactions, and the balance of nature."
          link="/science/life/ecology"
          image="/ecology.svg"
        />
        <Section
          title="Zoology"
          description="Dive into the animal kingdom, studying species behavior, anatomy, and evolution."
          link="/science/life/zoology"
          image="/zoology.svg"
        />
        <Section
          title="Botany"
          description="Learn about plant life, photosynthesis, and the importance of flora to Earth's ecosystems."
          link="/science/life/botany"
          image="/botany.svg"
        />
        {/* Add more sections as needed */}
      </main>

    </div>
  );
};

export default Life;
