
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger"; // Import from 'gsap/all'
import { useGSAP } from "@gsap/react";
import  Flip  from "gsap/Flip";
gsap.registerPlugin(ScrollTrigger, Flip);
import "./Task1.css";
const Task1 = () => {
  
  const { contextSafe } = useGSAP();
  useGSAP(() => {
    gsap.to(".containerflip", { rotation: 25 });
    gsap.to(".target", { scale: 1.2, rotation: -18, x: 60, y: 60 });
  }, []);;
 const doFlip =  contextSafe(() => {
    Flip.fit(".containerflip ", ".target", {
      // fitChild: ".child2",
      // scale: true, 
      duration: 2, 
      ease: "power1.inOut",
      absolute:true,
      
    });
     Flip.fit(".containerflip1", ".target1", {
      // fitChild: ".child22",
      scale: true, 
      duration: 2, 
      // nested:true,
      absolute:true,
      ease: "power1.inOut",
    });
  });

return (
  <>
<h3>Flipfit fitChild feature</h3>

<button onClick={doFlip} className="button">Flip</button>

<div className="target">target</div>
<div className="target1">target1</div>
<div className="containerflip">
  container
  <div className="child1">child1
  </div>
  <div className="child2">child2
  </div>
</div>
<div className="containerflip1">
  container1
  <div className="child11">child1
  </div>
  <div className="child22">child2
  </div>
</div>

  </>
);
}
export default Task1;



