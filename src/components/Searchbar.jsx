import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
// import './SearchBar.css'; // Import your custom CSS for styling

function SearchBar({ onSearchSelected }) {
    const [suggestions, setSuggestions] = useState([]);
    const myDataArray = [
        'Apple',
        'Banana',
        'Cherry',
        'Grapes',
        // ... other items
      ];
      const fetchSuggestions = (searchTerm) => {
        console.log('Search term:', searchTerm);
        const filteredSuggestions = myDataArray.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log('Filtered suggestions:', filteredSuggestions);
        return filteredSuggestions;
      };
      
      
    // (replace with your API call or data source)
    // ...
    return (
      <div className="search-bar">
        <ReactSearchAutocomplete
          items={suggestions}
          onSearch={fetchSuggestions}
          onSelect={onSearchSelected}
          // Customize other props as needed 

        />
      </div>
    );
  }
  
  export default SearchBar;
  