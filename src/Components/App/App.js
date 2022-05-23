


import React, { Component } from 'react';

import './App.css'

import SearchBar1 from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import Track from '../Track/Track';
import SearchResults from '../SearchResults/SearchResults'









class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SearchResults: [{ name: "name1", artist: "artist1", album: "album1", id: 1 },
      { name: "name2", artist: "artist2", album: "album1", id: 2 },
      { name: "name3", artist: "artist3", album: "album1", id: 3 },
      { name: "name4", artist: "artist4", album: "album1", id: 4 }],

      playlistName: 'My PlayList',
      playlistTracks: [{ name: "playlistname", artist: "playlistartist", album: "playlistalbum1", id: 1 },
      
      ],

      terms:"re"

    }

  
  }

    addTrack = (track) => {
      let tracks = this.state.playlistTracks;
      if (tracks.find(savedTrack=>savedTrack.id === track.id)) {
        return;
      }
      tracks.push(track)
      this.setState({ playlistTracks: tracks })



    }
    removeTrack=(track)=>{
      let tracks = this.state.playlistTracks;
      tracks=tracks.filter(currentTrack=>currentTrack.id !== track.id) 
      this.setState({playlistTracks:tracks})  
      }

    updatePlaylistName=(name)=>{
        this.setState({ playlistName:name})

    }
    savePlaylist=()=>{
      alert("correcrt")
      const trackUris =this.state.playlistTracks.map(track=>track.uri)
    }
    search=(term)=>{
      
      console.log(term)
      this.setState({terms:term})
    }









  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          <SearchBar1 onSearch={this.search} />

          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} onAdd={this.addTrack}  />
            <Playlist playlistName={this.state.playlistName}
             playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist} />


          </div>

        </div>
      </div>
    );
  }
}

export default App;