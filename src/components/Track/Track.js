import React from "react";
import "./Track.css";

class Track extends React.Component {
  // define a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false.
  handleRemove = () => {
    const { track, onRemove } = this.props;
    // Pass the track property to the onRemove method
    onRemove(track);
  };

  render() {
    const { name, artist, album } = this.props.track;

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{name}</h3>
          {/*Track information*/}
          <p>
            {artist} | {album}
          </p>
        </div>
        {/*Render a + or - anchor tag depending on the isRemoval property*/}
        <button className="Track-action" onClick={this.handleRemove}>-</button>
      </div>
    );
  }
}

export default Track;
