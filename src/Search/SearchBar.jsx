import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const handleTermChange = (e) => setTerm(e.target.value);

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" value={term} onChange={handleTermChange} />
      <button className="SearchButton" onClick={() => onSearch(term)}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;