import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {

  return (
    <div>

      <div className='home-container'>
        <div className='map-container'>
          <h1>Interactive Map</h1>
          <h3>(See how the globe looked throughout the ages)</h3>
          <iframe className='interactive-map' src="https://www.runningreality.org/?lesson=none&key=FREEACCESS" referrerpolicy="origin">Running Reality</iframe>
          <p>via <a href='https://www.runningreality.org/' target="_blank">The Running Reality Organization</a></p>
        </div>
        <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1-0jPkFmmwgZ8C7vc6jIB2F-ICVWY9LfjKsDQe14GYR0&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
        <div className='timelines'>
          <img src='/ancient-timeline.svg'></img>
          <img src='/middle-timeline.svg'></img>
          <img src='/modern-timeline.svg'></img>
        </div>

      </div>    
    </div>
  );
};

export default Home;
