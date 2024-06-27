import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Horiz.css";

gsap.registerPlugin(ScrollTrigger);

const Horiz = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    let sections = gsap.utils.toArray(".panel");
    console.log(containerRef.current.offsetWidth);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        markers: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, [containerRef]);

  return (
    <>
      <div className="containerhrz" ref={containerRef}>
        <div className="description panel blue"></div>
        <section className="panel red">ONE</section>
        <section className="panel orange">TWO</section>
        <section className="panel purple">THREE</section>
        <section className="panel gray">FIVE</section>
        <section className="panel green">FOUR</section>
      </div>
    </>
  );
};

export default Horiz;
