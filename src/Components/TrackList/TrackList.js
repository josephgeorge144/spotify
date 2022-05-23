import './TrackList.css'
import React, { Component } from 'react';
import Track from '../Track/Track';
import Playlist from '../Playlist/Playlist';

class TrackList extends Component {
    render() {
        
        return (
            <div>
                <div className="TrackList">
    {
      this.props.tracks.map(track=>{ 
          return <Track track={track}  key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove}  isRemoval={this.props.isRemoval}/>
       
      })
      
      
      }

</div>
                
            </div>
        );
    }
}

export default TrackList;