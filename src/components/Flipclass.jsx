import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip"; // Correct the import
import "./Flipclass.css";
const Flipclass = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    const container1 = document.querySelector(".container1");
    const container2 = document.querySelector(".container2");
    // const box = document.querySelector(".box");
    const box = containerRef.current;

    document.querySelector(".button").addEventListener("click", () => {
      const state = Flip.getState(box, {
        props: "backgroundColor,color,borderRadius",
      });
      box.classList.toggle("active");
      if (box.parentElement === container1) {
        container2.appendChild(box);
      } else {
        container1.appendChild(box);
      }

      Flip.from(state, {
        duration: 1,
      });
    });
  }, null);

  return (
    <div className="width-height">
      <div className="left">
        <div className="container1">
          <div ref={containerRef} className="box">
            <h2>What's "props"?</h2>
            <p>
              A comma-delimited list of CSS property names that should be
              animated (in addition to transforms and width/height).
            </p>
          </div>
        </div>
        <button className="button">FLIP</button>
      </div>
      <div className="right">
        <div className="container2"></div>
      </div>
    </div>
  );
};

export default Flipclass;
