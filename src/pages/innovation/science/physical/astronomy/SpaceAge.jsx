import React, { useState } from "react";
import "./module.css"; // Optional: Custom styles
import { Link } from "react-router-dom";

const SpaceAge = () => {
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
        <h1>The Space Age: Reaching for the Stars (1950 CE – Present)</h1>
        <p>
          The Space Age represents humanity’s greatest leap into the cosmos. From human spaceflight to robotic exploration, this era has expanded our understanding of the universe and our place in it.
        </p>
      </header>

      <main className="module-main">
        <section className="topic">
          <div className="section-header">
            <h2>The Dawn of Space Exploration</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("spaceExploration")}
            >
              {expandedSections.spaceExploration ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.spaceExploration && (
            <div className="section-content">
             <p>
  The Space Age officially began on October 4, 1957, with the Soviet Union's successful launch of <strong>Sputnik 1</strong>, the first artificial satellite to orbit Earth. This historic achievement marked a new era of scientific exploration and technological innovation, igniting the Space Race between the United States and the Soviet Union during the Cold War.
</p>
<h3>Key Milestones:</h3>
<ul>
  <li>
    <strong>1957: Launch of <i>Sputnik 1</i></strong>
    <ul>
      <li><i>Sputnik 1</i> was a 58-centimeter-diameter metal sphere equipped with four antennas that transmitted radio pulses, which could be detected on Earth.</li>
      <li>This achievement demonstrated the Soviet Union’s technological prowess and served as a wake-up call for the United States to accelerate its space program.</li>
      <li>The satellite’s orbit lasted 21 days before its transmitter batteries depleted, and it reentered Earth's atmosphere in January 1958.</li>
    </ul>
  </li>
  <li>
    <strong>1961: Yuri Gagarin’s Historic Spaceflight</strong>
    <ul>
      <li>Yuri Gagarin, aboard <i>Vostok 1</i>, became the first human to travel into space and orbit Earth on April 12, 1961.</li>
      <li>The mission lasted 108 minutes, during which Gagarin reached an altitude of 327 kilometers.</li>
      <li>His flight was a monumental step for humanity, symbolizing the potential for human space exploration.</li>
    </ul>
  </li>
  <li>
    <strong>1969: Apollo 11 Moon Landing</strong>
    <ul>
      <li>On July 20, 1969, the United States achieved a significant milestone when astronauts Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon.</li>
      <li>The Apollo 11 mission demonstrated American leadership in space exploration and fulfilled President John F. Kennedy’s goal of landing a man on the Moon by the end of the 1960s.</li>
      <li>Armstrong’s words, “That’s one small step for [a] man, one giant leap for mankind,” remain iconic, symbolizing the triumph of human ingenuity.</li>
    </ul>
  </li>
  <li>
    <strong>1971: Launch of <i>Mariner 9</i></strong>
    <ul>
      <li>On November 13, 1971, <i>Mariner 9</i> became the first spacecraft to orbit another planet, Mars.</li>
      <li>It provided detailed images of the Martian surface, revealing features like volcanoes, canyons, and evidence of past water flow.</li>
      <li>This mission significantly advanced planetary science and laid the groundwork for future Mars exploration missions.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The Space Age transformed humanity’s understanding of the universe and its place within it. From the launch of <i>Sputnik 1</i> to the Moon landing and interplanetary exploration, these milestones demonstrated the power of innovation and international competition to drive scientific progress. The achievements of this era continue to inspire future generations to explore new frontiers in space.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Первый_в_мире_искусственный_спутник_Земли.jpg/1280px-Первый_в_мире_искусственный_спутник_Земли.jpg"
                alt="Sputnik 1, the first artificial satellite"
              />
              <p>
                These early achievements laid the groundwork for a new era of exploration, shifting humanity’s gaze to the stars.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Human Spaceflight</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("humanSpaceflight")}
            >
              {expandedSections.humanSpaceflight ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.humanSpaceflight && (
            <div className="section-content">
              <p>
    Human spaceflight programs have not only expanded scientific knowledge but also served as powerful symbols of international collaboration and competition. From early efforts in the Mercury and Gemini programs to the ongoing success of the International Space Station (ISS), these missions have continuously pushed the boundaries of human capability and exploration.
  </p>
  <h3>Key Missions:</h3>
  <ul>
    <li>
      <strong>Apollo Program (1961–1972):</strong>
      <ul>
        <li>NASA’s Apollo program was a pivotal effort in human space exploration, culminating in six successful crewed Moon landings between 1969 and 1972.</li>
        <li>The program’s most iconic mission, Apollo 11, marked the first human landing on the Moon, with Neil Armstrong and Buzz Aldrin taking historic steps on July 20, 1969.</li>
        <li>Apollo missions returned valuable lunar samples, conducted experiments, and greatly enhanced understanding of the Moon’s composition and origins.</li>
        <li>The program showcased American ingenuity and leadership during the Space Race, fulfilling President John F. Kennedy's vision of sending humans to the Moon and safely returning them to Earth.</li>
      </ul>
    </li>
    <li>
      <strong>Space Shuttle Program (1981–2011):</strong>
      <ul>
        <li>The Space Shuttle program introduced reusable spacecraft capable of carrying humans and cargo into orbit, significantly reducing the cost of space missions.</li>
        <li>Notable achievements include the deployment of satellites such as the Hubble Space Telescope and the assembly of the International Space Station (ISS).</li>
        <li>Over 30 years, the program flew 135 missions, enabling long-term orbital research, advancing space technology, and fostering international cooperation.</li>
        <li>Despite its successes, the program faced challenges, including the tragic losses of the Challenger (1986) and Columbia (2003) crews, highlighting the inherent risks of human spaceflight.</li>
      </ul>
    </li>
    <li>
      <strong>International Space Station (1998–Present):</strong>
      <ul>
        <li>The ISS is a collaborative effort among space agencies from the United States (NASA), Russia (Roscosmos), Europe (ESA), Japan (JAXA), and Canada (CSA).</li>
        <li>Orbiting approximately 400 kilometers above Earth, the ISS serves as a multidisciplinary research laboratory conducting experiments in fields such as biology, physics, and materials science.</li>
        <li>The station has hosted astronauts from over 19 countries, symbolizing global cooperation in advancing human knowledge and technology.</li>
        <li>The ISS also serves as a testbed for technologies and protocols for future missions to the Moon, Mars, and beyond.</li>
      </ul>
    </li>
  </ul>
  <h3>Significance:</h3>
  <p>
    These key human spaceflight missions represent milestones in humanity’s journey to explore and understand the cosmos. From the groundbreaking achievements of the Apollo program to the reusable innovations of the Space Shuttle and the collaborative spirit of the ISS, each program has advanced technology, fostered international partnerships, and inspired future generations to reach for the stars.
  </p>
              <video height="450" width="auto" controls>
              <source
                src="https://www.gstatic.com/culturalinstitute/searchar/assets/international_space_station/desktop_dark.mp4"
                alt="International Space Station"
              />
              </video>
              <p>
                International Space Station
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>Robotic Exploration</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("roboticExploration")}
            >
              {expandedSections.roboticExploration ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.roboticExploration && (
            <div className="section-content">
             <p>
  Robotic spacecraft have journeyed to every planet in the solar system and beyond, uncovering the mysteries of distant worlds and expanding humanity's understanding of the cosmos. From the exploration of Mars to missions reaching interstellar space, robotic probes serve as the vanguard of space exploration, enabling groundbreaking discoveries.
</p>
<h3>Notable Missions:</h3>
<ul>
  <li>
    <strong>Voyager Program (1977–Present):</strong>
    <ul>
      <li>The twin Voyager spacecraft, launched in 1977, were designed to explore the outer planets of the solar system. Voyager 1 and Voyager 2 provided unprecedented data and images of Jupiter, Saturn, Uranus, and Neptune, revealing their moons, rings, and atmospheric conditions.</li>
      <li>Voyager 1 became the first human-made object to enter interstellar space in 2012, followed by Voyager 2 in 2018. They continue to send back data about the heliosphere and the interstellar medium.</li>
      <li>Both spacecraft carry the "Golden Records," containing sounds and images representing Earth’s diversity, serving as a time capsule for any extraterrestrial life that may encounter them.</li>
    </ul>
  </li>
  <li>
    <strong>Mars Rovers:</strong>
    <ul>
      <li>NASA’s series of Mars rovers have revolutionized the exploration of the Red Planet:
        <ul>
          <li><i>Spirit</i> and <i>Opportunity</i> (2004–2010/2019) explored vast Martian terrains, discovering evidence of past water activity.</li>
          <li><i>Curiosity</i> (2012–Present) has studied the planet’s climate and geology, analyzing soil and rock samples to assess Mars’s habitability.</li>
          <li><i>Perseverance</i> (2021–Present) is equipped to search for signs of ancient microbial life and collect samples for future return to Earth, paving the way for human exploration.</li>
        </ul>
      </li>
      <li>The rovers have significantly advanced our understanding of Mars’s environment, preparing for potential human missions.</li>
    </ul>
  </li>
  <li>
    <strong>New Horizons (2006–Present):</strong>
    <ul>
      <li>New Horizons provided humanity’s first close-up views of Pluto during its historic flyby in 2015, revealing an unexpectedly complex world with mountains, glaciers, and a surprisingly dynamic atmosphere.</li>
      <li>After its Pluto encounter, New Horizons continued its journey into the Kuiper Belt, flying by the Kuiper Belt object Arrokoth (formerly known as Ultima Thule) in 2019, unveiling insights into the early solar system.</li>
      <li>The spacecraft remains operational, transmitting data as it explores the outer reaches of the solar system.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  Robotic spacecraft have pushed the boundaries of exploration, providing data that would be impossible to gather otherwise. These missions have not only expanded scientific knowledge but also inspired global curiosity and innovation. From the outer planets to interstellar space, robotic explorers continue to illuminate the mysteries of the universe, serving as humanity’s emissaries to the cosmos.
</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg/1280px-The_Sounds_of_Earth_Record_Cover_-_GPN-2000-001978.jpg"
                alt="Voyager spacecraft with its golden record"
              />
              <p className="caption">
              Voyager Golden Record This gold aluminium cover was designed to protect the Voyager 1 and 2 "Sounds of Earth" gold-plated records from micrometeorite bombardment, but also serves a double purpose in providing the finder a key to playing the record. The explanatory diagram appears on both the inner and outer surfaces of the cover, as the outer diagram will be eroded in time. Flying aboard Voyagers 1 and 2 are identical "golden" records, carrying the story of Earth far into deep space. The 12 inch gold-plated copper discs contain greetings in 60 languages, samples of music from different cultures and eras, and natural and man-made sounds from Earth. They also contain electronic information that an advanced technological civilization could convert into diagrams and photographs. Currently, both Voyager probes are sailing adrift in the black sea of interplanetary space, flying towards the outmost border of our solar system.
              </p>
            </div>
          )}
        </section>

        <section className="topic">
          <div className="section-header">
            <h2>The Search for Exoplanets</h2>
            <button
              className="expand-button"
              onClick={() => toggleSection("exoplanets")}
            >
              {expandedSections.exoplanets ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedSections.exoplanets && (
            <div className="section-content">
             <p>
  The search for planets beyond our solar system has led to the discovery of thousands of exoplanets, revolutionizing our understanding of planetary systems and raising the tantalizing possibility of finding habitable worlds. Telescopes like Kepler, TESS, and the James Webb Space Telescope (JWST) have transformed this field, unveiling diverse planetary environments and advancing the quest to identify planets that may harbor life.
</p>
<h3>Key Discoveries:</h3>
<ul>
  <li>
    <strong>1995: First Exoplanet Around a Sun-like Star:</strong>
    <ul>
      <li>The discovery of 51 Pegasi b marked a watershed moment in astronomy. Located approximately 50 light-years away, it was the first exoplanet found orbiting a Sun-like star.</li>
      <li>51 Pegasi b is a "hot Jupiter" – a gas giant orbiting extremely close to its star. This unexpected finding challenged traditional models of planetary formation and migration.</li>
      <li>The discovery, made by Michel Mayor and Didier Queloz, earned them the 2019 Nobel Prize in Physics, cementing the significance of exoplanet research.</li>
    </ul>
  </li>
  <li>
    <strong>2009–2018: Kepler Space Telescope:</strong>
    <ul>
      <li>The Kepler mission revolutionized the study of exoplanets, discovering over 2,600 confirmed planets and thousands of additional candidates during its operational lifespan.</li>
      <li>Kepler’s discoveries include Earth-sized planets in the habitable zones of their stars, where liquid water could exist, such as Kepler-452b and Kepler-186f.</li>
      <li>The telescope’s data revealed that planetary systems are common in the galaxy and that planets come in a wide variety of sizes and compositions, including "super-Earths" and "mini-Neptunes." </li>
    </ul>
  </li>
  <li>
    <strong>2021–Present: James Webb Space Telescope (JWST):</strong>
    <ul>
      <li>With its unparalleled sensitivity and advanced instruments, JWST has opened new frontiers in the study of exoplanets, particularly their atmospheres.</li>
      <li>JWST has already detected molecules like carbon dioxide, water vapor, and methane in the atmospheres of exoplanets, providing crucial data on their potential habitability.</li>
      <li>The telescope’s observations aim to characterize planets in greater detail, particularly those in the habitable zones of their stars, and search for biosignatures – indicators of life.</li>
    </ul>
  </li>
</ul>
<h3>Significance:</h3>
<p>
  The discovery and study of exoplanets have profoundly changed our perspective on the universe, demonstrating that planetary systems are ubiquitous and diverse. With advancements in telescope technology, the field continues to move closer to answering one of humanity’s most profound questions: Are we alone in the universe? Missions like Kepler, TESS, and JWST have not only expanded scientific knowledge but also inspired a deeper appreciation for the possibilities that lie beyond our solar system.
</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Hr8799_orbit_hd.gif"
              />
              <p className="caption">
              Four exoplanets of the HR 8799 system imaged by the W. M. Keck Observatory over the course of seven years. Motion is interpolated from annual observations.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="module-footer">
        <p>
          The Space Age continues to push the boundaries of exploration, inspiring humanity to dream of interstellar travel and the mysteries that await beyond our solar system.
        </p>
        <Link to="/science/physical/astronomy" className="back-link">
          Back to Astronomy
        </Link>
      </footer>
    </div>
  );
};

export default SpaceAge;
