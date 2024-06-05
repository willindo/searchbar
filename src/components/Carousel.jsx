import React, { useState,useEffect,useRef,useLayoutEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(ScrollTrigger,useGSAP);
import './Carousel.css'
const Carousel = () => {
    const tech = ['React', 'NextJs', 'Typescript', 'Gsap', 'RFiber', 'BabylonJs', 'Tailwind', 'Bootstrap', 'Less', 'Sass', 'ReactQuery', 'React-Router'];
    const container = useRef(null);
    useGSAP (()=> {
            gsap.to('.crsl', {
                // xPercent: -101,
                x:'-100vw',
                repeat: -1,
                duration:6 ,
                ease: "linear"
            }).totalProgress(0.6);
        },{scope:container} );

    return (
      <>
        <div className="boxContainer" ref={container} >
            {tech.map((element, index) => (
                <div key={index} className='crsl'>
                    <p>{element}</p>
                </div>
            ))}
        </div>
      </>
    );
}

export default Carousel