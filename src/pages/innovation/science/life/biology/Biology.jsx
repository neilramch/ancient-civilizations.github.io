import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import './Biology.css'; // Optional: Custom styles
import Section from "../../../../../components/Section";

const Biology = () => {
  return (
    <div className="biology-container">
      <header className="biology-header">
        <h1>The History of Biology</h1>
        <p>
          Explore the study of living organisms, cellular structures, genetics, and biological processes. Trace the journey from early observations of life to modern biological breakthroughs.
        </p>
      </header>

      <main className="biology-main">
        <Section
          title="Ancient Biology"
          years={"(c. 400 BCE – 1500 CE)"}
          description="Discover the early observations of life by thinkers like Aristotle and how ancient civilizations categorized plants and animals."
          link="/science/life/biology/ancient"
        />
        <Section
          title="The Microscopic World"
          years={"(1600 CE – 1800 CE)"}
          description="Learn about the invention of the microscope and how pioneers like Hooke and Leeuwenhoek unveiled the hidden world of cells and microorganisms."
          link="/science/life/biology/microscopic"
        />
        <Section
          title="Darwin and Evolution"
          years={"(1800 CE – 1900 CE)"}
          description="Explore Charles Darwin's theory of natural selection and the impact of evolutionary biology on our understanding of life's diversity."
          link="/science/life/biology/darwin-evolution"
        />
        <Section
          title="The Molecular Revolution"
          years={"(1900 CE – 2000 CE)"}
          description="Dive into breakthroughs in genetics, DNA discovery, and molecular biology that revolutionized the study of heredity and cellular function."
          link="/biology/molecular-revolution"
        />
        <Section
          title="Modern Biology and Beyond"
          years={"(2000 CE – Present)"}
          description="Explore advancements in biotechnology, genomics, and synthetic biology that are shaping the future of medicine and environmental science."
          link="/biology/modern-biology"
        />
        <Section
          title="The Future of Biology"
          description="Learn about cutting-edge research in bioengineering, artificial life, and the quest to understand the origins of life itself."
          link="/biology/future"
        />
      </main>

      <footer className="biology-footer">
        <p>
          Biology helps us understand the living world and our place within it. Explore how discoveries in this field continue to impact our health, environment, and future.
        </p>
        <Link to="/science" className="back-link">Back to Sciences</Link>
      </footer>
    </div>
  );
};

export default Biology;
