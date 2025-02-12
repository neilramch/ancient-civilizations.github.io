import React from "react";
import './Science.css'; // Optional: custom styles
import Section from '../../../components/Section'
import { Link } from "react-router-dom";
import Physical from "./physical/Physical";
import Life from "./life/LifeScience";
import Earth from "./physical/earth/Earth";


const Science = () => {
  return (
    <div className="science-container">
      <header className="science-header">
        <h1>Scientific Discoveries</h1>
        <p>Explore major categories of scientific breakthroughs and their significance.</p>
      </header>

      <main className="science-main">

            <Physical />
            <Life />
            
        <Section
          title="Medical and Health Sciences"
          description="Find out about advancements in medicine, public health, and pharmacology."
          link="/science/medical-sciences"
        />
        {/* Add more sections as needed */}
      </main>
      <footer className="biology-footer">
        <p>
          Science helps us understand the living world and our place within it. Explore how discoveries in this field continue to impact our health, environment, and future.
        </p>
        <Link to="/innovation" className="back-link">Back to Innovations</Link>
      </footer>
    </div>
  );
};

export default Science
