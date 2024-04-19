import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./MixScroll.css"
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MixScroll = () => {
  useEffect(() => {
    gsap.utils.toArray(".slideText").forEach(text => {
      gsap.timeline({
        defaults: {ease: "none"},
        scrollTrigger: {
          scroller: text.closest(".horizSlider"),
          horizontal: true,
          trigger: text.closest(".slide"),
          start: "left right",
          end: "left left",
          scrub: true
        }
      })
      .fromTo(text, {x: 250}, {x: -250}, 0)
      .from(text.nextElementSibling, {scale: 0.8}, 0)
    });
    
  }, []);

  return (
    <>
   <h1 className="header-section">Scroll the slider to the right to see some parallax effects</h1>

<section className="horizSlider">
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500" alt="Filler image"/>
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500" alt="Filler image"/>
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500"/>
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500"/>
  </div>
  
  <div className="slide">
    <h2 className="slideText">Text title</h2>
    <img width="1000" height="500" className="slideImage" src="https://source.unsplash.com/random/1000x500"/>
  </div>
</section>

<h1 className="header-section">How do you like the photos?</h1>





      </>
  );
};

export default MixScroll;
