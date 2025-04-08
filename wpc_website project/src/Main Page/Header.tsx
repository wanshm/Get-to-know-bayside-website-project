import React, { useState, useEffect } from 'react';
// import './Header.css';

export default function Header() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div id="banner" className="container center">
      <div className="marquee-container" role="presentation">
        <div className={`marquee-content ${isPaused ? 'paused' : ''}`}>
          <p>Get To Know Bayside High School!</p>
        </div>
        <div className="marquee-controls">
          <button 
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Resume scrolling" : "Pause scrolling"}
          >
            {isPaused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </div>
  );
}