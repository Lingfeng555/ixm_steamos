import React, { useState, useCallback } from 'react';
import styles from './RayTracingComparison.module.css';

const RayTracingComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, newPosition)));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.comparisonWrapper}>
        <div className={styles.textContent}>
          <h2>Ray Tracing Optimization on SteamOS</h2>
          <p>Experience unprecedented visual fidelity with our optimized ray tracing technology, delivering stunning reflections and lighting effects with minimal performance impact.</p>
        </div>
        
        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderContainer}
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => handleMouseMove(e.touches[0])}
          >
            <img
              src={`${process.env.PUBLIC_URL}/rtx_on.png`}
              alt="RTX On"
              className={`${styles.image} ${styles.imageLeft}`}
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/rtx_off.png`}
              alt="RTX Off"
              className={`${styles.image} ${styles.imageRight}`}
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            />
            <div 
              className={styles.slider}
              style={{ left: `${sliderPosition}%` }}
            >
              <div className={styles.sliderLine}></div>
              <div className={styles.sliderButton}></div>
            </div>
            <div className={styles.labels}>
              <span className={styles.labelLeft}>RTX OFF</span>
              <span className={styles.labelRight}>RTX ON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RayTracingComparison;