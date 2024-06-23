import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import "./Horiz copy.css"

gsap.registerPlugin(ScrollTrigger);

const PinningSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
// Today header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".sticky-today",
  start: "top bottom-=150",
  endTrigger: ".today-content",
  end: "bottom bottom-=75",
  pin: true,
  pinSpacing: false
});

// keep at top
ScrollTrigger.create({
  trigger: ".sticky-today",
  start: "top top+=75",
  endTrigger: "html",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false
});


// Tomorrow header handling
// keep at bottom
ScrollTrigger.create({
  trigger: ".sticky-tomorrow",
  start: "top bottom-=75",
  endTrigger: ".tomorrow-content",
  end: "bottom bottom-=75",
  pin: true,
  pinSpacing: false
});

// keep at top
ScrollTrigger.create({
  trigger: ".sticky-tomorrow",
  start: "top top+=150",
  endTrigger: "html",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false
});

    }, []);

  return (
    <>
    <div className="navhc">
  <h2>Navigation</h2>
</div>

<div className="intro blue">

</div>

<div className="today-page">
<div className="today-header green sticky-today">
  <h2>Today header</h2>
</div>

<div className="today-content green">
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  <p>Today content</p>
  
</div>
</div>

<div className="tomorrow-page">
<div className="tomorrow-header purple sticky-tomorrow">
  <h2>Tomorrow header</h2>
</div>

<div className="tomorrow-content purple">
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
  <p>Tomorrow content</p>
</div>
</div>

<div className="footerpin">
  <p>Footer</p>
</div>
    </>
  );
};

export default PinningSection;
