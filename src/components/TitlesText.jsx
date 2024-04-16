// TitleText.js

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const TitleText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Get all the modules inside the container
    const modules = containerRef.current.querySelectorAll('.module');

    // Animate each module horizontally
    modules.forEach((module, index) => {
      gsap.to(module, {
        xPercent: -100 * (modules.length - 1), // Move each module offscreen
        ease: 'none',
        scrollTrigger: {
          trigger: module,
          pin: true, // Pin the module
          scrub: 1, // Smooth scrolling effect
          end: `+=${module.offsetWidth}`, // Scroll until the last module
        },
      });
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* Add your modules here */}
      <div className="module green">
        <h2>Module green</h2>
      </div>
      <div className="module bluen">
        <h2>Module blue </h2>
      </div>
      <div className="module red">
        <h2>Module red</h2>
      </div>
      {/* Add other modules similarly */}
    </div>
  );
};

export default TitleText;
