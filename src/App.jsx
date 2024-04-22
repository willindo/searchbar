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
import Addremove from "./components/Addremove";
import TitleText from "./components/TitlesText";
export default function App() {
  const profiles = [
    { id: "1", name: "Allie Grater" },
    { id: "2", name: "Aida Bugg" },
    { id: "3", name: "Gabrielle" },
    { id: "4", name: "Grace" },
    { id: "5", name: "Hannah" },
    { id: "6", name: "Heather" },
    { id: "7", name: "John Doe" },
    { id: "8", name: "Anne Teak" },
    { id: "9", name: "Audie Yose" },
    { id: "10", name: "Addie Minstra" },
    { id: "11", name: "Anne Ortha" },
  ];
  const [results, setResults] = useState({profiles});
  const [selectedProfile, setSelectedProfile] = useState(
 {profiles}
  );
  return (
     <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="about" element={<About />}/>
          <Route path="sample1" element={<Sample1 />}/>
          <Route path="sample2" element={<Sample2 />}/>
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
          <li>
            <Link to="/sample1">Sample1</Link>
          </li>
          <li>
            <Link to="/sample2">Sample2</Link>
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
    <>
    <div className="hpage" >
    <ul className="homeul" >
          <li>
          </li>
          {/* <li>
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
          </li> */}
          <li>
            <Link to="/sample">Sample</Link>
          </li>
          <li>
            <Link to="/sample1">Sample1</Link>
          </li>
          <li>
            <Link to="/sample2">Sample2</Link>
          </li>
        </ul>
    </div>
    </>
  );
}

function About() {
  return (
    <>
      <Follow/>
      <MouseFollowComponent/>
      {/* <LiveSearch
      results={selectedProfile}
      value={selectedProfile?.name}
      renderItem={(item) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />  */}
    </>
  );
}

function Dashboard() {
  return (
     <Parallax/>
    // <TitleText/>
  );
}
function Sample() {
  return(
    <Parallax1/>
  )
}
function Sample1() {
  return(
    <Reveal/>
  )
}
function Sample2() {
  return(
    <>
    <Addremove/>
    </>
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