import React, { useState,useEffect,useRef,useLayoutEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './Carousel.css'
import { Home } from "../App";
const Carousel = () => {
    const tech = ['React', 'NextJs', 'Typescript', 'Gsap', 'RFiber', 'BabylonJs', 'Tailwind', 'Bootstrap', 'Less', 'Sass', 'ReactQuery', 'React-Router'];
    const boxContainerRef = useRef(null);
    useEffect(() => {
            gsap.to('.box', {
                x: "-100vw",
                // xPercent:-100,
                // xPercent: -90 * (sections.length - 1),
                repeat: -1,
                duration: 4,
                ease: "none"
            });
        }, []);

    return (
      <>
        <div className="boxContainer" ref={boxContainerRef}>
            {/* <Home/> */}
            {tech.map((element, index) => (
                <div key={index} className='box'>
                    <p>{element}</p>
                </div>
            ))}
        </div>

      </>
    );
}

export default Carousel