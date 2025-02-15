import React from 'react';
import Draggable from 'react-draggable';
import './Home.css';
import DailyFact from '../components/DailyFact';
import News from '../components/News';

const Home = () => {

  
  return (
    <div>
      <div className='home-container'>
        <div className='widgets-container'>

          {/* Daily Fact Widget - Draggable */}
          <Draggable bounds=".widgets-container" axis="both"  defaultPosition={{ x: -400, y: 50 }}>
            <div className='fact-container draggable-widget'>
              <DailyFact />
            </div>
          </Draggable>

          {/* News Widget - Draggable */}
          <Draggable bounds=".widgets-container"  defaultPosition={{ x: 400, y: 50 }}  cancel="a"  >
            <div className='news-container draggable-widget'>
              <News />
            </div>
          </Draggable>

        </div>

        {/* Interactive Map */}
        <div className='map-container'>
          <h1>Interactive Map</h1>
          <h3>(See how the globe looked throughout the ages)</h3>
          <iframe 
            className='interactive-map' 
            src="https://www.runningreality.org/?lesson=none&key=FREEACCESS" 
            referrerPolicy="origin"
          >
            Running Reality
          </iframe>
          <p>via <a href='https://www.runningreality.org/' target="_blank" rel="noopener noreferrer">
            The Running Reality Organization
          </a></p>
        </div>

        {/* Timeline Embed */}
        <iframe 
          src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1-0jPkFmmwgZ8C7vc6jIB2F-ICVWY9LfjKsDQe14GYR0&font=Default&lang=en&initial_zoom=2&height=650' 
          width='100%' 
          height='650' 
          allowFullScreen 
          frameBorder='0'
        ></iframe>

        {/* Timeline Images */}
        <div className='timelines'>
          <img src='/ancient-timeline.svg' alt="Ancient Timeline" />
          <img src='/middle-timeline.svg' alt="Middle Timeline" />
          <img src='/modern-timeline.svg' alt="Modern Timeline" />
        </div>
      </div>    
    </div>
  );
};

export default Home;
