import React from 'react';
import styles from './Hardware.module.css';

const Hardware = () => {
  return (
    <section id="hardware" className={styles['hardware-section']}>
      <h2 className={styles['section-title']}>Supported Hardware</h2>
      <p className={styles['tagline-sub']}>
        From powerful gaming rigs to pocket-sized devices - Your games, your way
      </p>
      <div className={styles['hardware-grid']}>
        <div className={styles['hardware-card']}>
          <div className={styles['hardware-icon']}>
            <div className={styles['hardware-placeholder']}>
              [Raspberry Pi Icon]
            </div>
          </div>
          <h3 className={styles['hardware-title']}>Raspberry Pi</h3>
          <ul className={styles['hardware-specs']}>
            <li>Raspberry Pi 4 Model B</li>
            <li>2GB/4GB/8GB RAM variants</li>
            <li>Optimal for retro gaming</li>
            <li>Perfect for home streaming setup</li>
          </ul>
        </div>

        <div className={styles['hardware-card']}>
          <div className={styles['hardware-icon']}>
            <div className={styles['hardware-placeholder']}>
              [Jetson Icon]
            </div>
          </div>
          <h3 className={styles['hardware-title']}>NVIDIA Jetson</h3>
          <ul className={styles['hardware-specs']}>
            <li>Jetson Nano/Xavier NX</li>
            <li>AI-powered gaming features</li>
            <li>CUDA-accelerated performance</li>
            <li>Ideal for GPU-intensive games</li>
          </ul>
        </div>

        <div className={styles['hardware-card']}>
          <div className={styles['hardware-icon']}>
            <div className={styles['hardware-placeholder']}>
              [Mini PC Icon]
            </div>
          </div>
          <h3 className={styles['hardware-title']}>Mini PCs</h3>
          <ul className={styles['hardware-specs']}>
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