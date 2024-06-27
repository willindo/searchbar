import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import from 'gsap/all'
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";
import "./Task.css";

gsap.registerPlugin(ScrollTrigger, Flip);

const Task = () => {
  const { contextSafe } = useGSAP();
  const wrap = useRef();
  const bara = useRef([]);
  const clk = useRef();
  const container1 = document.querySelector("#container1");
  const container2 = document.querySelector("#container2");
  const bars = gsap.utils.toArray(".bar");
  useGSAP(
    () => {
      const doFlip = contextSafe(() => {
        console.log(bars);
        // Get the initial state
        const state = Flip.getState(bars);
        // Mix up the order
        gsap.utils.shuffle(bars);

        // Switch the parent
        let newContainer =
          bars[0].parentElement === container1 ? container2 : container1;
        bars.forEach((bar) => newContainer.appendChild(bar));

        // Do the animation!
        Flip.from(state, {
          // Optional properties related to HOW it's transitioned
          duration: 0.9,
          stagger: 0.09,
          ease: "back.out(1.3)",
        });
      });
      clk.current.addEventListener("click", doFlip);
      return () => {
        clk.current.removeEventListener("click", doFlip);
      };
    },

    { scope: wrap, revertOnUpdate: true }
  );
  return (
    <>
      <h1>Flip seamlessly between containers, columns, and order</h1>
      <div id="flex">
        <div ref={wrap} id="container1" className="column">
          <div
            className="bar"
            ref={bara}
            style={{ backgroundColor: "#1a1433" }}
          ></div>
          <div
            className="bar"
            ref={bara}
            style={{ backgroundColor: "#045459" }}
          ></div>
          <div
            className="bar"
            ref={bara}
            style={{ backgroundColor: "#15c286" }}
          ></div>
          <div
            className="bar"
            ref={bara}
            style={{ backgroundColor: "#abd96d" }}
          ></div>
          <div
            className="bar"
            ref={bara}
            style={{ backgroundColor: "#fbbf54" }}
          ></div>
          <div
            className="bar"
            ref={bara}
            style={{ backgroundColor: "#ec0f47" }}
          ></div>
          <div
            className="bar"
            ref={bara}
            style={{ backgroundColor: "#700460" }}
          ></div>
        </div>
        <div ref={wrap} id="container2" className="column"></div>
      </div>
      <button ref={clk}>FLIP</button>
    </>
  );
};

export default Task;
