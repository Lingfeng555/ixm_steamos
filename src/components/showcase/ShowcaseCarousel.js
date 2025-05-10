import React, { useState, useEffect, useRef } from 'react';
import styles from './ShowcaseCarousel.module.css';

const SECTIONS = [
  {
    id: 'gaming',
    title: 'Immersive Gaming Mode',
    description: 'Switch seamlessly to our optimized Gaming Mode interface, designed specifically for controller-first navigation and couch gaming comfort.',
    image: '/gaming_mode.jpeg',
    features: [
      'Controller-optimized interface',
      'Quick access to your game library',
      'Instant switching between games',
      'Built-in performance overlay',
      'Easy access to community features',
      'Customizable controller layouts'
    ]
  },
  {
    id: 'raytracing',
    title: 'Ray Tracing Optimization',
    description: 'Experience unprecedented visual fidelity with our optimized ray tracing technology, delivering stunning reflections and lighting effects.',
    image: '/rtx_on.png',
    features: [
      'Real-time ray tracing support',
      'Enhanced lighting and shadows',
      'Optimized performance impact',
      'Compatible with all RTX cards',
      'Dynamic resolution scaling',
      'DLSS integration'
    ]
  },
  {
    id: 'distro',
    title: 'Linux Distribution Integration',
    description: 'Seamlessly integrate with popular Linux distributions, providing a unified gaming experience across the open-source ecosystem.',
    image: '/distro_integration.jpg',
    features: [
      'Native package management support',
      'Proton compatibility layer',
      'Shared controller configurations',
      'Cross-distribution save sync',
      'Unified gaming overlay',
      'System-wide optimization'
    ]
  }
];

const ShowcaseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const getSlideClassName = (index) => {
    const normalizedIndex = index % SECTIONS.length;
    const currentNormalized = currentIndex % SECTIONS.length;
    
    if (normalizedIndex === currentNormalized) return styles.active;
    if (normalizedIndex === (currentNormalized + 1) % SECTIONS.length) return styles.next;
    if (normalizedIndex === (currentNormalized - 1 + SECTIONS.length) % SECTIONS.length) return styles.previous;
    return '';
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    if (!isDragging || !carouselRef.current) return;
    setIsDragging(false);

    const carousel = carouselRef.current;
    const itemWidth = carousel.offsetWidth;
    const scrollPosition = carousel.scrollLeft;
    
    // Calculate which slide is most visible
    const approximateIndex = scrollPosition / itemWidth;
    const decimal = approximateIndex % 1;
    let targetIndex;

    if (decimal > 0.5) {
      targetIndex = Math.ceil(approximateIndex);
    } else {
      targetIndex = Math.floor(approximateIndex);
    }

    // Smooth scroll to center the most visible slide
    carousel.style.scrollBehavior = 'smooth';
    carousel.scrollLeft = targetIndex * itemWidth;

    // Reset to middle set if needed
    if (targetIndex <= SECTIONS.length - 1 || targetIndex >= SECTIONS.length * 2) {
      setTimeout(() => {
        carousel.style.scrollBehavior = 'auto';
        carousel.scrollLeft = itemWidth * (SECTIONS.length + (targetIndex % SECTIONS.length));
        carousel.style.scrollBehavior = 'smooth';
      }, 500);
    }

    setCurrentIndex(targetIndex);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollPosition = carouselRef.current.scrollLeft;
    const itemWidth = carouselRef.current.offsetWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      
      // Reset to middle set of slides if we're at the edges
      if (newIndex <= SECTIONS.length - 1 || newIndex >= SECTIONS.length * 2) {
        setTimeout(() => {
          carouselRef.current.style.scrollBehavior = 'auto';
          carouselRef.current.scrollLeft = itemWidth * (SECTIONS.length + (newIndex % SECTIONS.length));
          carouselRef.current.style.scrollBehavior = 'smooth';
        }, 500);
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      // Set initial scroll position to raytracing section
      carousel.scrollLeft = carousel.offsetWidth;
    }
  }, []);

  return (
    <section id="showcase" className={styles.container}>
      <div 
        ref={carouselRef}
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onScroll={handleScroll}
      >
        {[...SECTIONS, ...SECTIONS, ...SECTIONS].map((section, index) => (
          <div 
            key={`${section.id}-${index}`} 
            className={`${styles.slide} ${getSlideClassName(index)}`}
          >
            <div className={styles.content}>
              <div className={styles.imageContainer}>
                <img 
                  src={section.image} 
                  alt={section.title}
                  className={styles.showcaseImage}
                />
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.title}>{section.title}</h2>
                <p className={styles.description}>{section.description}</p>
                <ul className={styles.featureList}>
                  {section.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {SECTIONS.map((_, index) => (
          <div 
            key={index}
            className={`${styles.indicator} ${index === currentIndex % SECTIONS.length ? styles.active : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseCarousel;