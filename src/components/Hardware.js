import React from 'react';

const Hardware = () => {
  return (
    <section className="hardware-section">
      <h2 className="section-title">Supported Hardware</h2>
      <p className="tagline-sub">
        From powerful gaming rigs to pocket-sized devices - Your games, your way
      </p>
      <div className="hardware-grid">
        <div className="hardware-card">
          <div className="hardware-icon">
            <div className="hardware-placeholder">
              [Raspberry Pi Icon]
            </div>
          </div>
          <h3 className="hardware-title">Raspberry Pi</h3>
          <ul className="hardware-specs">
            <li>Raspberry Pi 4 Model B</li>
            <li>2GB/4GB/8GB RAM variants</li>
            <li>Optimal for retro gaming</li>
            <li>Perfect for home streaming setup</li>
          </ul>
        </div>

        <div className="hardware-card">
          <div className="hardware-icon">
            <div className="hardware-placeholder">
              [Jetson Icon]
            </div>
          </div>
          <h3 className="hardware-title">NVIDIA Jetson</h3>
          <ul className="hardware-specs">
            <li>Jetson Nano/Xavier NX</li>
            <li>AI-powered gaming features</li>
            <li>CUDA-accelerated performance</li>
            <li>Ideal for GPU-intensive games</li>
          </ul>
        </div>

        <div className="hardware-card">
          <div className="hardware-icon">
            <div className="hardware-placeholder">
              [Mini PC Icon]
            </div>
          </div>
          <h3 className="hardware-title">Mini PCs</h3>
          <ul className="hardware-specs">
            <li>Intel NUC compatible</li>
            <li>AMD mini PC support</li>
            <li>Compact form factor</li>
            <li>Living room gaming ready</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hardware;