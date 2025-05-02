import React from 'react';

const Features = () => {
  return (
    <div className="features-grid">
      <div className="feature-card">
        <h3 className="feature-title">Universal Compatibility</h3>
        <p className="feature-description">
          Optimized to work on any hardware configuration, from basic setups to high-end gaming machines
        </p>
      </div>
      
      <div className="feature-card">
        <h3 className="feature-title">Optimized Performance</h3>
        <p className="feature-description">
          Enhanced gaming engine for maximum performance and lower latency on any device
        </p>
      </div>
      
      <div className="feature-card">
        <h3 className="feature-title">Extensive Library</h3>
        <p className="feature-description">
          Access thousands of games optimized for SteamOS, with Windows titles compatibility
        </p>
      </div>
      
      <div className="feature-card">
        <h3 className="feature-title">Adaptive Interface</h3>
        <p className="feature-description">
          Smooth experience on traditional monitors, touch screens, and TVs
        </p>
      </div>
    </div>
  );
};

export default Features;