import React from "react";
import "./Section.css";
import { Link } from 'react-router-dom';


const Section = ({ title, years, description, link, image, component }) => {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <h3 className="section-years">{years}</h3>
      <p className="section-description">{description}</p>
      <img src={image} />
      <Link to={link} className="section-link">Learn More</Link>
    

    </div>
  );
};

export default Section;
