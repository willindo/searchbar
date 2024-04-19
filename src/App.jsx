import { useState } from 'react'
import './App.css'
import LiveSearch from './components/LiveSearch';
import MouseFollowComponent from './components/MouseFollowComponent';
import MixScroll from './components/MixScroll';
import Parallax from './components/Parallax';
import Reveal from './components/Reveal';
import Parallax1 from './components/Parallax1';
function App() {
  const [count, setCount] = useState(0)
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

 
  const handleChange = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = profiles.filter((profiles) =>
      profiles.name.toLowerCase().includes(target.value)
    );
    // const filteredValue = profiles.filter((item) =>
    // item.toLowerCase().includes(searchTerm.toLowerCase()))
    setResults(filteredValue);
  };
  return (
    <>
    <Parallax1/>
    <Reveal/>
   <Parallax/>
    {/* <MixScroll/> */}
      <MouseFollowComponent/> 
     <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    /> 
    </>
  )
}

export default App
