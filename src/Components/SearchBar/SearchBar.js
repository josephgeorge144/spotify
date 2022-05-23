
import React, { Component } from 'react';
import './SearchBar.css'



class SearchBar extends Component {

    handleChange=(event)=>{
        this.searchsave=event.target.value
    }

    handleSave=()=>{
        this.props.onSearch(this.searchsave)
    }
    
    render() {
        return (
           
                <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleChange}/>
  <button className="SearchButton" onClick={this.handleSave}>SEARCH</button>
</div>
                
          
        );
    }
}

export default SearchBar