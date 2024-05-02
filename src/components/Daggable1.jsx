import React, {useRef ,useEffect }from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import './Daggable1.css'
gsap.registerPlugin(Draggable)
const Daggable1 = () => {
    const elementRef = useRef(null);
    const parentRef = useRef(null);
  
    useEffect(() => {
        Draggable.create(".draggable", {
            type: "x,y",
            edgeResistance: 0.65,
            bounds: ".viewport",
            throwProps: true
          });
    }, []);
  
    return (
      <>
     <div className="viewport">
  <div className="parent">
    <div className="draggable">
    </div>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
  </div>
</div>
      </>
    );
}

export default Daggable1