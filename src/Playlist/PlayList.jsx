import TrackList from '../TrackComponents/TrackList';

 const Playlist = ({ playlistName, playlistTracks, onRemove, onSave }) => {
  const handleNameChange = () => {};
  console.log(playlistName);

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList
        tracks={playlistTracks}
        isRemoval={true}
        onRemove={onRemove}
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
 };

 export default Playlist;