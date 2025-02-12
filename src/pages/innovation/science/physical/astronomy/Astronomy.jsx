import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import './Astronomy.css'; // Optional: Custom styles
import Section from "../../../../../components/Section";

const Astronomy = () => {
  return (
    <div className="astronomy-container">
      <header className="astronomy-header">
        <h1>The History of Astronomy</h1>
        <p>
          Discover the cosmos—planets, stars, galaxies, and the vast expanse of the universe. Trace humanity's journey from ancient stargazing to modern astrophysics.
        </p>
      </header>

      <main className="astronomy-main">
        <Section
          title="Ancient Stargazing"
          years={"(c. 3000 BCE – 500 CE)"}
          description="Explore how ancient civilizations like the Babylonians, Egyptians, and Mayans mapped the skies and used celestial observations for calendars and navigation."
          image="/stargazing.svg"
          link="/science/physical/astronomy/ancient-stargazing"
        />
        <Section
          title="Copernican Revolution"
          years={"(1500 CE – 1600 CE)"}
          description="Learn about the groundbreaking work of Copernicus, Galileo, and Kepler that shifted our understanding of the solar system and planetary motion."
          image="/solarsystem.svg"
          link="/science/physical/astronomy/copernican-revolution"
        />
        <Section
          title="The Age of Telescopes"
          years={"(1600 CE – 1800 CE)"}
          description="Dive into the era of telescopic discovery, from Galileo’s observations of moons and planets to Herschel’s mapping of the stars."
          image="/telescope.svg"
          link="/science/physical/astronomy/telescopes"
        />
        <Section
          title="Einstein's Universe"
          years={"(1900 CE – 1930 CE)"}
          description="Understand how Einstein’s theories of relativity transformed our view of space, time, and gravity, paving the way for modern cosmology."
          image="/einstein.svg"
          link="/science/physical/astronomy/einstein"
        />
        <Section
          title="The Space Age"
          years={"(1950 CE – Present)"}
          description="Explore the era of space exploration, including human missions, robotic probes, and the study of exoplanets and distant galaxies."
          image="/spaceship.svg"
          link="/science/physical/astronomy/space-age"
        />
        <Section
          title="The Future of Astronomy"
          description="Learn about cutting-edge research in dark energy, gravitational waves, and the quest to find extraterrestrial life."
          image="/satellite.svg"
          link="/science/physical/astronomy/future"
        />
      </main>

      <footer className="astronomy-footer">
        <p>
          Astronomy reveals our place in the cosmos and inspires humanity's quest for knowledge. Explore how our understanding of the universe continues to expand.
        </p>
        <Link to="/science" className="back-link">Back to Sciences</Link>
      </footer>
    </div>
  );
};

export default Astronomy;
