import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./MixScroll.css"
// Register ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);
const MixScroll = () => {
  useEffect(() => {
    gsap.defaults({ease: "none", duration: 2});

    // create a sequence that moves 3 of the panels in from different directions 
    const tl = gsap.timeline();
    tl.from(".orange", {xPercent: -100})
      .from(".purple", {xPercent: 100})
      .from(".green", {yPercent: -100});
    
    // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer. 
    ScrollTrigger.create({
      animation: tl,
      trigger: "#containerm",
      start: "top top",
      end: "+=4000", 
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
    
  }, []);

  return (
    <>
    <div className="description panel blue">
    <div><h1>Slide-in panels</h1>
      <p>A simple animation linked to a ScrollTrigger with <code>scrub: true</code> creates a nifty effect.</p>
      <div className="scroll-down">Scroll down<div className="arrow"></div></div>
    </div>
  </div>

<div id="containerm">
  <section className="panel red">
    ONE
  </section>
  <section className="panel orange">
    TWO
  </section>
  <section className="panel purple">
    THREE
  </section>
  <section className="panel green">
    FOUR
  </section>

</div>

      </>
  );
};

export default MixScroll;
