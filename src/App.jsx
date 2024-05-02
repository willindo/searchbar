import React, { useState,useEffect,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Outlet,Link } from 'react-router-dom';
import Font1 from "./components/Font1";
import Parallax from "./components/Parallax";
import Parallax1 from "./components/Parallax1";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Carousel from "./components/Carousel";
import { Draggable } from "gsap/Draggable";
import Daggable1 from "./components/Daggable1";
import MouseFollowComponent from "./components/MouseFollowComponent";
import Pinned from "./components/Pinned";
import Description from "./components/Description";
gsap.registerPlugin(Draggable)
export default function App() {
  return (
    <div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sample" element={<Sample />} >

          <Route path="sample1" element={<Sample1 />} />
          <Route path="sample2" element={<Sample2 />} >

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
  return (
    <>
      <nav >
        <ul  className="nav1">
          <li>
            <Link to="/">Animation Skew</Link>
          </li>
          <li>
            <Link to="/about">Know me</Link>
          </li>
          <li>
            <Link to="/sample">Samples</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
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
    <h1>Home</h1>
    <Pinned/>
    </>
  )
}

function About() {
  return (
    <>
    <Carousel/>
    <div className="font">
     <Font1/>
    </div>
     <Description/>
    </>
  );
}

function Sample() {
return (
  <>
       <ul>
          <li>
            <Link to="/sample/sample1">Simple one</Link>
          </li>
          <li>
            <Link to="/sample/sample2">Another One</Link>
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
    <h1>Sample3</h1>
    </>
  )
}
function Justsee() {
  return(
    <>
{/* <h1>Just See</h1> */}
    <Parallax1/>
    </>
  )
}
function Anothersee() {
  return(
  <Carousel/> 
  )
}
  function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <>
    
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <MouseFollowComponent/>
      <Daggable1/>
    </div>
    </>
  );
}

