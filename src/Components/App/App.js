import "./App.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Search Results State
      searchResults: [
        {
          name: "cool Song",
          artist: "Gage Miller",
          album: "My first album",
          id: "256",
        },
        {
          name: "Best Song",
          artist: "Adalie Miller",
          album: "My Second album",
          id: "257",
        },
        {
          name: "Love Song",
          artist: "Claudia Miller",
          album: "My last album",
          id: "258",
        },
      ],

      // Playlist Name state
      playlistName: "My Playlist",

      // Playlist Tracks state
      playlistTracks: [
        {
          name: "Song 1",
          artist: "Artist 1",
          album: "Album 1",
          id: "1",
        },
        {
          name: "Song 2",
          artist: "Artist 2",
          album: "Album 2",
          id: "2",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
