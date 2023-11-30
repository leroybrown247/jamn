import React from "react";
import Track from "../Track/Track";
import "./Tracklist.css";

class Tracklist extends React.Component {
  render() {
    const { tracks, onRemove } = this.props; // Destructuring

    return (
      <div className="Tracklist">
        {/* Map through tracks and render Track components */}
        {tracks &&
          tracks.map((track) => (
            <Track key={track.id} track={track} onRemove={onRemove} />
            // Pass the track property to the onRemove method
          ))}
      </div>
    );
  }
}

export default Tracklist;
