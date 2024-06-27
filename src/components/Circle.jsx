import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import from 'gsap/all'
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";
import "./Circle.css";

gsap.registerPlugin(ScrollTrigger, Flip);
const Circle = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const items = container.getElementsByClassName("imagelike");
    const radius = 280; // Adjust the radius as needed
    const angleStep = (2 * Math.PI) / items.length;

    gsap.utils.toArray(items).forEach((item, index) => {
      item.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${index})`;
      const angle = index * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      gsap.to(item, {
        x,
        y,
        duration: 4,
        repeat: -1,
        yoyoEase: true,
        scale: 2,
        // scale: 0.5,
        // yoyo: true,
        stagger: 1,
        ease: "circ.Out",
      });
    });
  }, []);

  return (
    <div className="circle-container" ref={containerRef}>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
      <div className="imagelike"></div>
    </div>
  );
};
export default Circle;
