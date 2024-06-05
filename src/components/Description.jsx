import React from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'
import { Flip } from "gsap/Flip";
import './Description.css'
gsap.registerPlugin(ScrollTrigger,Flip,useGSAP);

const Description = () => {
  
  useGSAP(()=>{
    const group = document.querySelector(".group");

document.querySelector(".button").addEventListener("click", () => {
  // Get the initial state
  const state = Flip.getState(".group, .drctn");
  
  console.log(state);
  
  // toggle the flex direction
  group.classList.toggle("reorder");
  
  Flip.from(state, {
    absolute: true, // uses position: absolute during the flip to work around flexdrctn challenges
    duration: 0.5, 
    stagger: 0.1,
    ease: "power1.inOut"

    // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
  });
},);
  },)
  return (
    <>
    <button id="changeLayout" className="button">change</button>
    <div className='group'>
    <p  className='drctn'  style={{ fontSize:'1.5rem' }}>
        I’m an enthusiastic software developer with a penchant for creating seamless user experiences and functionality go hand in hand.. My journey began with tinkering in JavaScript, and I’ve since delved into the world of React for front-end development. Whether it’s crafting pixel-perfect UIs or diving into 3D webpages, responsive-optimized for speed-loading ,I thrive on turning ideas into interactive interfaces.</p>
<p  className='drctn'  style={{ fontSize:'1.5rem' }} >Ready for Back-End Challenges: I’ve explored Express.js and MongoDB. I’m adaptable and ready to explore other databases as needed.</p>
<p className='drctn'  style={{ fontSize:'1.5rem' }}>Next.js Enthusiast: I’ve dabbled in Next.js and am excited about its potential for building efficient and SEO special, server-rendered applications.Let us Next.js project.</p>
<p className='drctn'  style={{ fontSize:'1.5rem' }}>Skills Snapshot: Proficient in React, Tailwind CSS, Bootstrap, GSAP, and a dash of GLSL shader experimentation.R3Fiber,threejs,babylonjs,react-router, redux/useContext+useReducer/zustand, typescript and I’m always eager to learn more.</p>


<div className='drctn connect'   >

    <a href="https://portfolio-like-badshakn.vercel.app/">Portfolio</a>
    <a href="https://babyloncoretry.vercel.app/">3D web</a>
    <a href="https://github.com/willindo">Github</a>
</div>
<p className='drctn'  style={{ fontSize:'1.5rem' }}>No previous job experience, but a strong belief in efficient work. I welcome interviews and assessments. Observe me for a while, and when you’re ready, 
Let’s Connect: If you’re seeking a passionate developer who thrives on challenges and cherishes teamwork, feel free to reach out. Whether it’s about potential opportunities, tech trends, I’m always up for a chat.</p> 
    </div>
    </>
  )
}

export default Description