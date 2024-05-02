import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Parallax1.css"
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Parallax1 = () => {
  useEffect(() => {
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        scrub: true
      }, 
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });
    
    
  }, []);

  return (
    <>
    <div className='para1'>

<div id="parallax-bg-3" className="parallax-bg" data-speed=".75">
  <div id="bg-3-1"></div>
  <div id="bg-3-2"></div>
  <div id="bg-3-3"></div>
  
</div>
<div id="parallax-bg-2" className="parallax-bg" data-speed=".4">
  <div id="bg-2-1"></div>
  <div id="bg-2-2"></div>
  <div id="bg-2-3"></div> 
  <div id="bg-2-4"></div>
  <div id="bg-2-5"></div>
  <div id="bg-2-6"></div>
</div>
<div id="parallax-bg-1" className="parallax-bg" data-speed=".25">
  <div id="bg-1-1"></div>
  <div id="bg-1-2"></div>
  <div id="bg-1-3"></div>
  <div id="bg-1-4"></div>
  <div id="bg-1-5"></div>
</div>
<div id="ground"></div>

    </div>
      </>
  );
};

export default Parallax1;
