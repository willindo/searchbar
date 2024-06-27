import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import from 'gsap/all'
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";
import "./Fliptrial.css";

gsap.registerPlugin(ScrollTrigger, Flip);

const Fliptrial = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const bgRef = useRef(null);
  const flipCtxRef = useRef(null);

  const anim = useGSAP(() => {
    // if (flipCtxRef.current) {
    //   flipCtxRef.current.revert();
    // }

    // flipCtxRef.current = gsap.context(() => {
    const flip = Flip.fit(".containerflipflp ", ".targetflp", {
      // fitChild: ".inbox1",
      scale: true,
      // duration: 4,
      ease: "power1.inOut",
      absolute: true,
      // nested: true,
    });
    const flip1 = Flip.fit(".containerflip1flp ", ".target1flp", {
      // fitChild: ".inbox4",
      scale: true,
      // duration: 2,
      ease: "power1.inOut",
      absolute: true,
      // nested: true,
    });

    ScrollTrigger.create({
      trigger: "body",
      start: 10,
      // endTrigger: p2Ref.current,
      end: "bottom 60%",
      // scrub: true,
      markers: true,
      animation: flip,
      // toggleActions: "play none none reset",
    });
    ScrollTrigger.create({
      trigger: "body",
      start: 10,
      // endTrigger: p2Ref.current,
      end: "bottom 60%",
      // scrub: true,
      markers: true,
      animation: flip1,
      // onLeaveBack: () => flip1.reverse(),
    });
  });
  // });

  useEffect(() => {
    anim;
    window.addEventListener("resize", anim);
    return () => {
      window.removeEventListener("resize", anim);
    };
  }, [anim]);
  return (
    <>
      <div className="targetflp">target</div>
      <div className="target1flp">target1</div>
      <div className="containerflipflp">
        container
        <div className="inbox1">child1</div>
        <div className="inbox2">child2</div>
      </div>
      <div className="containerflip1flp">
        container1
        <div className="inbox3">child1</div>
        <div className="inbox4">child2</div>
      </div>
    </>
  );
};

export default Fliptrial;
