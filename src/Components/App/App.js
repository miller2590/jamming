import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      // Search Results State
      searchResults: [],

      // Playlist Name state
      playlistName: "My Playlist",

      // Playlist Tracks state
      playlistTracks: [],
    };
  }

  // If track is not in playlist it adds Track to Playlist
  addTrack(track) {
    let myTracks = this.state.playlistTracks;
    if (myTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    myTracks.push(track);
    this.setState({ playlistTracks: myTracks });
  }

  // Removes a track from Playlist if
  removeTrack(track) {
    let mytracks = this.state.playlistTracks;
    let updatedPlaylist = mytracks.filter((tracks) => tracks.id !== track.id);

    this.setState({ playlistTracks: updatedPlaylist });
  }

  // Updates name of Playlist
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  // Saves playlist using Spotify API
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlayList(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  }

  // Sets the search bar to a Spotify endpoint
  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
