const SearchBar = () => {
  const [term, setTerm] = useState("");
  const handleTermChange = (e) => setTerm(e.target.value);

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;