import TrackList from '../TrackComponents/TrackList';

const SearchResult = ({ searchResults, onAdd}) => {
  return (
    <div className="searchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
};

export default SearchResult;