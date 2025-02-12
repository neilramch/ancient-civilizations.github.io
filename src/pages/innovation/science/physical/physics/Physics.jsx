import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import './Physics.css'; // Optional: Custom styles
import Section from "../../../../../components/Section";

const Physics = () => {
  return (
    <div className="physics-container">
      <header className="physics-header">
        <h1>The History of Physics</h1>
        <p>
          Trace the journey of physics from ancient observations to the modern-day exploration of the universe. Learn how brilliant minds shaped our understanding of nature.
        </p>
      </header>

      <main className="physics-main">
        <Section
          title="Ancient Physics"
          years={"(c. 600 BCE – 500 CE)"}
          description="Explore how early civilizations like the Greeks, Egyptians, and Chinese observed natural phenomena and developed foundational ideas."
          link="/science/physical/physics/ancient"
          image="/eureka.svg"
        />
        <Section
          title="Classical Era"
          years={"(c. 1500 CE – 1800 CE)"}
          description="Learn about pivotal discoveries in mechanics, motion, and gravity, led by figures like Galileo and Newton."
          link="/science/physical/physics/classical"
          image="/newton.svg"

        />
        <Section
          title="19th Century Physics"
          years={"(1800 CE – 1900 CE)"}
          description="Dive into the age of thermodynamics, electromagnetism, and the work of scientists like Maxwell and Faraday."
          link="/science/physical/physics/nineteenth-century"
          image="/faraday.svg"

        />
        <Section
          title="Quantum Revolution"
          years={"(1900 CE – 1930 CE)"}

          description="Understand how Planck, Einstein, and Bohr revolutionized physics with the discovery of quantum mechanics."
          link="/science/physical/physics/quantum-revolution"
          image="/bohr.svg"

        />
        <Section
          title="Modern Physics"
          years={"(1930 CE – Present)"}
          description="Explore Einstein's theory of relativity, advancements in particle physics, and the ongoing quest to unify physical theories."
          link="/science/physical/physics/modern"
          image="/einstein.svg"

        />
        <Section
          title="The Future of Physics"
          years={"(21st Century and Beyond)"}
          description="Learn about cutting-edge research in string theory, dark matter, and the pursuit of a Theory of Everything."
          link="/science/physical/physics/future"
          image="/quantum.svg"

        />
      </main>

      <footer className="physics-footer">
        <p>
          The history of physics is a testament to human curiosity and ingenuity. Explore how each era contributed to the science that shapes our lives today.
        </p>
        <Link to="/science/" className="back-link">Back to Sciences</Link>
      </footer>
    </div>
  );
};

export default Physics;
