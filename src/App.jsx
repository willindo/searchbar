import { Routes, Route, Outlet, Link,useRoutes, useParams } from "react-router-dom";
import { useState,useRef } from 'react'
import './App.css'
import gsap from 'gsap'
// import {useGSAP} from '@gsapreact'
import LiveSearch from './components/LiveSearch';
import MouseFollowComponent from './components/MouseFollowComponent';
import MixScroll from './components/MixScroll';
import Parallax from './components/Parallax';
import Reveal from './components/Reveal';
import Parallax1 from './components/Parallax1';
import Follow from "./components/Follow";
export default function App() {
  
  return (
     <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="about" element={<About />}/>
          <Route path="sample" element={<Sample />}/>
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="layoutapp">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/sample">Sample</Link>
          </li>
        </ul>
      </nav>


      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div className="hpage" >
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
      <Follow/>
  );
}

function Dashboard() {
  return (
     <Parallax/>
  );
}
function Sample() {
  return(
    <Parallax1/>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );}