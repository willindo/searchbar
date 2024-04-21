import { useState,useRef } from 'react'
import './Follow.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
export default function Follow() {
    const xTo = useRef();
    const yTo = useRef();
    const fly = useRef();
    
    const { context, contextSafe } =  useGSAP(() => {
      xTo.current = gsap.quickTo(".flair", "x", {duration: 0.8, ease: "power3"}),
      yTo.current = gsap.quickTo(".flair", "y", {duration: 0.8, ease: "power3"});
    },{ scope: fly } );
  
    const moveShape = contextSafe((e) => {
      xTo.current(e.clientX);
      yTo.current(e.clientY);
     });
  
    return (
      <div className="follow" ref={fly} onMouseMove={(e) => moveShape(e)} >
        <p>Move your mouse around</p>
        <div className="flair"  ></div>
      </div>
    );
  }