import { useState } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const handleTermChange = (e) => setTerm(e.target.value);

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className="SearchButton">
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;