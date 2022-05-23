import './Playlist.css';
import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    handleChange=(event)=>{
        this.props.onNameChange(event.target.value)
        
    }
    render() {
        return (
            <div>
                <div className="Playlist">
  <input defaultValue={"New Playlist"} onChange={this.handleChange}/>
                <TrackList tracks={this.props.playlistTracks}  onRemove={this.props.onRemove} isRemoval={true}/> 
  <button className="Playlist-save"  onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
                
            </div>
        );
    }
}

export default Playlist;