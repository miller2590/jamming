import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    const newName = e.target.value;
    this.props.onNameChange(newName);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          defaultValue={this.props.playlistName}
          onChange={this.handleNameChange}
        />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
