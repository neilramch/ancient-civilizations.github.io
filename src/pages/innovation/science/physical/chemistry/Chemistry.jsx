import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import './Chemistry.css'; // Optional: Custom styles
import Section from "../../../../../components/Section";

const Chemistry = () => {
  return (
    <div className="chemistry-container">
      <header className="chemistry-header">
        <h1>The History of Chemistry</h1>
        <p>
          Discover the evolution of chemistry from ancient alchemy to the modern study of matter and its transformations. Learn how science unlocked the secrets of the elements.
        </p>
      </header>

      <main className="chemistry-main">
        <Section
          title="Ancient Alchemy"
          years={"(c. 300 BCE – 1600 CE)"}
          description="Uncover the mystical origins of chemistry, where ancient alchemists sought the Philosopher's Stone and the secrets of transmutation."
          link="/science/physical/chemistry/alchemy"
          image="/Alchemy.svg"
        />
        <Section
          title="Modern Chemistry"
          years={"(1600 CE – 1800 CE)"}
          description="Learn about the scientific revolution and the emergence of modern chemistry with pioneers like Boyle and Lavoisier."
          link="/science/physical/chemistry/modern"
          image="/chemistry.svg"
        />
        <Section
          title="The Periodic Table"
          years={"(1800 CE – 1900 CE)"}
          description="Explore the discovery of elements and Mendeleev's creation of the Periodic Table, which organized the building blocks of matter."
          link="/science/physical/chemistry/periodic-table"
          image="/carbon.svg"

        />
        <Section
          title="Atomic Theory"
          years={"(1900 CE – 1930 CE)"}
          description="Understand the breakthroughs in atomic theory, from Dalton to Rutherford, that redefined our understanding of atoms and molecules."
          link="/science/physical/chemistry/atomic-theory"
          image="/molecule.svg"

        />
        <Section
          title="Organic Chemistry"
          years={"(1930 CE – Present)"}
          description="Dive into the chemistry of life, studying carbon-based compounds and their crucial role in biology, medicine, and industry."
          link="/science/physical/chemistry/organic"
          image="/chemist.svg"

        />
        <Section
          title="The Future of Chemistry"
          description="Learn about advances in green chemistry, nanotechnology, and molecular engineering that promise a sustainable future."
          link="/science/physical/chemistry/future"
          image="/petri.svg"

        />
      </main>

      <footer className="chemistry-footer">
        <p>
          Chemistry's journey is a story of discovery and innovation. Explore how our understanding of matter has transformed the world.
        </p>
        <Link to="/science/" className="back-link">Back to Sciences</Link>
      </footer>
    </div>
  );
};

export default Chemistry;
