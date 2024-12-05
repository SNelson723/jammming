import { useState } from 'react'
import './App.css'
import SearchResult from './Search/SearchResult';
import SearchBar from './Search/SearchBar';
import Playlist from './Playlist/PlayList';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter(currentTrack => currentTrack.id !== track.id))
  };

  const addTrack = (track) => {
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  return (
    <>
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={search} />
          <div className="App-playlist">
            <SearchResult searchResults={searchResults} addTrack={addTrack} />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={setPlaylistName}
              onRemove={removeTrack}
              onSave={savePlaylist}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
