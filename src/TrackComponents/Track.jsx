const Track = ({ track, isRemoval, removeTrack, addTrack }) => {
  const buttonRender = () => {
    if (isRemoval) {
      return (
        <button className='trackAction' onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="trackAction" onClick={addTrack}>
          +
        </button>
      );
    }
  };
  return (
    <>
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {buttonRender()}
      </div>
    </>
  );
};

export default Track;