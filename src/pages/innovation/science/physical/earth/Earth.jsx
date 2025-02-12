import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import './Earth.css'; // Optional: Custom styles
import Section from "../../../../../components/Section";

const EarthSciences = () => {
  return (
    <div className="earth-sciences-container">
      <header className="earth-sciences-header">
        <h1>The History of Earth Sciences</h1>
        <p>
          Delve into the geology and natural phenomena that explain Earth's physical properties. Trace the development of our understanding of the planet we call home.
        </p>
      </header>

      <main className="earth-sciences-main">
        <Section
          title="Ancient Geology"
          years={"(c. 3000 BCE – 1500 CE)"}
          description="Explore how ancient civilizations interpreted natural phenomena like earthquakes and volcanoes and began to classify minerals and rocks."
          link="/science/physical/earth/ancient"
          image="/volcano.svg"
        />
        <Section
          title="The Age of Exploration"
          years={"(1500 CE – 1800 CE)"}
          description="Learn about the discoveries of Earth's geography and natural resources during the great explorations and the rise of modern geological studies."
          link="/science/physical/earth/exploration"
          image="/ship.svg"
        />
        <Section
          title="Birth of Modern Geology"
          years={"(1800 CE – 1900 CE)"}
          description="Dive into the foundations of modern geology, including Hutton's theory of uniformitarianism and the development of stratigraphy."
          link="/science/physical/earth/modern"
          image="/strata.svg"
        />
        <Section
          title="Plate Tectonics Revolution"
          years={"(1900 CE – 1970 CE)"}
          description="Understand the discovery of plate tectonics, which explained Earth's dynamic crust and led to a deeper understanding of earthquakes and volcanic activity."
          link="/science/physical/earth/platetectonics"
          image="/earth-science.svg"
        />
        <Section
          title="Climate Science and Earth Systems"
          years={"(1970 CE – Present)"}
          description="Explore advancements in climate science, oceanography, and the interconnected systems that shape Earth's environment."
          link="/science/physical/earth/climate"
          image="/climate.svg"
        />
        <Section
          title="The Future of Earth Sciences"
          years={"(21st Century and Beyond)"}
          description="Learn about ongoing research in sustainable resource management, natural disaster prediction, and the study of Earth's future changes."
          link="/science/physical/earth/future"
          image="/sustainable.svg"
        />
      </main>

      <footer className="earth-sciences-footer">
        <p>
          Earth sciences reveal the story of our planet and help us better understand and protect the world we live in. Explore how each era contributed to this fascinating field.
        </p>
        <Link to="/science" className="back-link">Back to Sciences</Link>
      </footer>
    </div>
  );
};

export default EarthSciences;
