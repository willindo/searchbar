import React, { useState,useEffect,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import {BrowserRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Carousel from "./components/Carousel";
import Daggable1 from "./components/Daggable1";
import Font1 from "./components/Font1";
import Parallax from "./components/Parallax";
import Parallax1 from "./components/Parallax1";
import MouseFollowComponent from "./components/MouseFollowComponent";
import Pinned from "./components/Pinned";
import Description from "./components/Description";
import Flipblock from "./components/Flipblock";
import EmblaCarousel from "./components/EmblaCarousel";
import EmblaCarousel1 from "./components/EmblaCarousel1";
import EmblaCarousel3 from "./components/EmblaCarousel3";
import ComboBox from "./components/AutoComplete";
// import AntDesignGrid from "./components/DataView";  
import DataGridDemo from "./components/DataView1";
import DropdownMenuDemo from "./components/Dropdown";
import MenubarDemo from "./components/Menubar";
import NavigationMenuDemo from "./components/NavigationMenu";
import SelectDemo from "./components/Select";
import AccordionExpandDefault from "./components/Accordian";
gsap.registerPlugin(Draggable)
export default function App() {
 

  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below.  */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="clone" element={<Clone />} >
            <Route path="clone1" element= {<Sample/>  }/>
            <Route path="clone2" element= {<Sample2/>  }/>
            <Route path="clone3" element= {<Parallax/>  }/>
          </Route>
          <Route path="sample" element={<Sample />}>
            <Route path="sample1" element={<Sample1 />} />
            <Route path="sample2" element={<Sample2 />}>
              <Route path="new" element={<Justsee />} />
              <Route path="fun" element={<Anothersee />} />
            </Route>
            <Route path="sample3" element={<Sample3 />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
 
  // useGSAP((context) => {
  //   // let ref = useRef()
  //   let lis = document.querySelectorAll("li");
  //   lis.forEach((l) => {
  //     // Create a GSAP animation for the current l
  //     let hoverEffect = gsap.to(l, {
  //       backgroundColor:'teal',
  //       borderColor:'yellow',
  //         scale: 1.2,
  //         duration: 1,
  //         paused: true,
  //         ease: "power1.inOut"
  //     });
  //     // Add event listeners to play and reverse the animation on hover
  //     l.addEventListener("mouseenter", () => hoverEffect.play());
  //     l.addEventListener("mouseleave", () => hoverEffect.reverse());
  // });
  // }, []);

  return (
    <>
      <nav className="laynav" >
        <ul  className="nav1">
          <li>
            <Link to="/"   >Animation Skew</Link>
          </li>
          <li>
            <Link to="/about"  >Know me</Link>
          </li>
          <li >
            <Link to="/sample"  >Samples</Link>
          </li>
          <li>
            <Link to="/clone" >Cloning</Link>
          </li>
          <li>
            <Link to="/nothing-here"  >Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        </>
  );
}

export  function Home() {
  return (
    <>
    <Pinned/>
    </>
  )
}

function About() {
  const OPTIONS2 = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES2 = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <>

    {/* <ComboBox/> */}
<EmblaCarousel1 options={OPTIONS2} slides={SLIDES2} />
    <Carousel/>
    {/* <div className="font"> */}
     {/* <Font1/> */}
    {/* </div> */}
     {/* <Description/> */}
    </>
  );
}

function Sample() {
  return (
    <>
       <ul className="sampleul" >
          <li>
            <Link to="/sample/sample1">Simple one</Link>
          </li>
          <li>
            <Link to="/sample/sample2">Another One</Link>
          </li>
          <li>
            <Link to="/sample/sample3">Sample3</Link>
          </li>
        </ul>
        <Outlet/>
    </>
  );
}
function Sample1(params) {
  return(
    <>
    <Parallax/>
    </>
  )
}
function Sample2(params) {
  return(
    <>
  <div>
       <ul>
          <li>
            <Link to="/sample/sample2/new">See</Link>
          </li>
          <li>
            <Link to="/sample/sample2/fun">Fun</Link>
          </li>
        </ul>
        <Outlet/>
    </div>
    </>
  )
}
function Sample3(params) {
return(
  <>
  <div style={{ height:'500px' }} >

    <Carousel/>
    <HamburgerMenuIcon className="dot"/>
    <DotFilledIcon className="dot" style={{ height:'20px',color:'green',backgroundColor:'gold',fontSize:'100px' }} />
    <ChevronRightIcon  style={{ height:'20px',color:'green',backgroundColor:'blue',fontSize:'100px' }}/>
  </div>
    </>
  )
}
function Justsee() {
  return(
    <>
    <Parallax1/>
    </>
  )
}
function Anothersee() {
  const OPTIONS2 = {loop:true,speed:0.5,stopOnMouseEnter:false}
  const SLIDES2 = ['Next.js','React', 'Express.js','Mongodb','Tailwind css','GSAP','Three.js','R3Fibre','Babylon.js','Sass']
  return(
    <>
  {/* <Carousel/>  */}
  <EmblaCarousel3 options={OPTIONS2} slides={SLIDES2} />
  {/* <Flipblock/> */}
    </>
  )
}
  function Clone() {
    
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const OPTIONS2 = { dragFree: true, loop: true }
    const SLIDE_COUNT2 = 5
    const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
    
    return (
      <>
      {/* <AccordionExpandDefault/> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <EmblaCarousel1 options={OPTIONS2} slides={SLIDES2} />
    </>
    
  );
}

function NoMatch() {
  return (
    <>
    <DropdownMenuDemo/>
    <ComboBox/>
    {/* <div className="menucheck"  > */}
    <NavigationMenuDemo/>
    {/* </div> */}
    <MenubarDemo/>
    <DataGridDemo/>
      
    <SelectDemo/>
    {/* <AntDesignGrid /> */}
    {/* <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <MouseFollowComponent/>
      <Daggable1/>
    </div> */}
    </>
  );
}

