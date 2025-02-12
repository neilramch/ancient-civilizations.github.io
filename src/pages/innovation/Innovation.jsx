import React from 'react';
import './Innovation.css';

import { Link } from 'react-router-dom';

function Innovation() {
  return (
      <div>
        <div className="categories-container">
          <div className='header-container'>
            <h3>Innovations</h3>
            <img src='/construction.svg' />
          </div>  
          <div className="grid-container">
          <Link to="/science" className='link'>
            <div className="grid-tile">
                <div>
                    Scientific Discoveries
                </div>
            </div>
           </Link>
            {/* <div className="grid-tile">Technological Advancements</div>
            <div className="grid-tile">Medical Breakthroughs</div>
            <div className="grid-tile">Engineering Marvels</div>
            <div className="grid-tile">Transportation Innovations</div>
            <div className="grid-tile">Energy and Sustainability</div>
            <div className="grid-tile">Communication Systems</div>
            <div className="grid-tile">Agricultural Improvements</div>
            <div className="grid-tile">Space Exploration</div>
            <div className="grid-tile">Artificial Intelligence and Machine Learning</div>
            <div className="grid-tile">Cybersecurity and Digital Safety</div>
            <div className="grid-tile">Consumer Electronics</div> */}
          </div>
        </div>

        <footer className="physics-footer">
        <p>
          The history of innovations is a testament to human curiosity and ingenuity. Explore how each era contributed to the world that shapes our lives today.
        </p>
        <Link to="/" className="back-link">Back to Home</Link>
      </footer>

      </div>
  );
}

export default Innovation;
