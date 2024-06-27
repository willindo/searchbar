import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import from 'gsap/all'
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";
import "./Task2.css";

gsap.registerPlugin(ScrollTrigger, Flip);

const Task2 = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const bgRef = useRef(null);
  const flipCtxRef = useRef(null);

  const anim = useGSAP(() => {
    if (flipCtxRef.current) {
      flipCtxRef.current.revert();
    }

    const bg = bgRef.current;
    bg.style.cssText = ""; // clear out the inline styles (shouldn't be necessary beyond 3.11.5)

    flipCtxRef.current = gsap.context(() => {
      const state = Flip.getState(bg, { props: "transform" });
      p2Ref.current.appendChild(bg);
      const flip = Flip.from(state, { absolute: true });

      ScrollTrigger.create({
        trigger: "body",
        start: 10,
        endTrigger: p2Ref.current,
        end: "bottom 80%",
        scrub: true,
        animation: flip,
        onEnter: () => {
          p1Ref.current.classList.remove("active");
        },
        onLeaveBack: () => {
          p1Ref.current.classList.add("active");
        },
        onLeave: () => {
          p2Ref.current.classList.add("active");
        },
        onEnterBack: () => {
          p2Ref.current.classList.remove("active");
        },
      });
    });
  }, []);

  useEffect(() => {
    anim;
    window.addEventListener("resize", anim);
    return () => {
      window.removeEventListener("resize", anim);
    };
  }, [anim]);
  return (
    <>
      <div className="containerbg">
        <div ref={p1Ref} className="p p-1 active">
          <div ref={bgRef} className="p-bg"></div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="spacer"></div>
        <div ref={p2Ref} className="p rev p-2 p-right">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="spacer-min"></div>
      </div>
    </>
  );
};

export default Task2;
