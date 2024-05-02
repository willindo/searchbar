// MouseFollowComponent.js

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./MouseFollowComponent.css"
const MouseFollowComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = container.querySelector('.content');

    // Set initial width (doubled screen width)
    gsap.set(container, { width: window.innerWidth * 2 });

    // Mousemove event listener
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const containerWidth = container.offsetWidth;
      const visibleWidth = window.innerWidth;

      // Calculate the scroll position based on mouse position
      const scrollPosition = gsap.utils.mapRange(
        0,
        containerWidth - visibleWidth,
        0,
        1,
        mouseX
      );

      // Scroll the container
      gsap.to(container, {
        x: -(containerWidth - visibleWidth) * scrollPosition,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Attach mousemove event listener
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Clean up: remove event listener
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="containertext" ref={containerRef}>
        <h1 className='content'>Mouse-Follow Component</h1>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
        <span>textS</span>
    </div>
  );
};

export default MouseFollowComponent;
