import { useState } from 'react'
import './App.css'
import ReactSearchBox from "react-search-box";
import Search from 'react-search'
import SearchBar from './components/Searchbar';
import LiveSearch from './components/LiveSearch';
import TitleText from './components/TitlesText';
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
  // const items = [
  //   {
  //     id: "john",
  //     value: "John Doe",
  //   },
  //   {
  //     id: "jane",
  //     value: "Jane Doe",
  //   },
  //   {
  //     id: "mary",
  //     value: "Mary Phillips",
  //   },
  //   {
  //     id: "robert",
  //     value: "Robert",
  //   },
  //   {
  //     id: "karius",
  //     value: "Karius", 
  //   },
  // ];
  // const HiItems = (items)=> 
  //    console.log(items)
  const [results, setResults] = useState({profiles});
  const [selectedProfile, setSelectedProfile] = useState(
 {profiles}
  );

 
  const handleChange = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(target.value)
    );
    // const filteredValue = profiles.filter((item) =>
    // item.toLowerCase().includes(searchTerm.toLowerCase()))
    setResults(filteredValue);
  };
  return (
    <>
    <TitleText/>
     <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
    <SearchBar  />
       {/* <ReactSearchBox 
        placeholder="Placeholder"
        value="Doe"
        data={items}
        dropdownHoverColor='blue'
        dropdownBorderColor='green'
        callback={(record) => console.log(record)}
      /> */}
  {/* <Search items={items} />
 
 <Search items={items}
         placeholder='Pick your language'
         maxSelected={3}
         multiple={true}
         onItemsChanged={ (items)=> 
          console.log(items)}
         /> */}
    </>
  )
}

export default App
