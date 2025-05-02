import React from 'react';

const Performance = () => {
  return (
    <section className="performance-section">
      <h2 className="section-title">Performance Improvements</h2>
      <div className="chart-container">
        <div className="chart">
          <div className="chart-bar" style={{ height: '60%' }}>
            <span className="chart-label">Windows</span>
            <span className="chart-value">60 FPS</span>
          </div>
          <div className="chart-bar" style={{ height: '90%' }}>
            <span className="chart-label">SteamOS</span>
            <span className="chart-value">90 FPS</span>
          </div>
        </div>
        <p className="chart-caption">Average FPS in Popular Games</p>
      </div>
    </section>
  );
};

export default Performance;