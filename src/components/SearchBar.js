import React, { Component } from 'react';
import PlayerData from '../data/PlayerData';

class SearchBar extends Component {
  // we need to set up the state which would change as the content in search box changes
  constructor(){
    super();

    this.state={
      searchTerm:null
    };
  }

  // add a function that captures the event of the search box on change and set
  // the value of the search box to the state variable
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({searchTerm:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }

    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }

    const items = PlayerData.filter((data)=>{
      if(this.state.searchTerm == null)
          return data
      else if(data.player_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || data.country_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
          return data
      }
    }).map(player=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{player.player_id}</span>
            <span style={styleInfo}>{player.player_name}</span>
            <span style={styleInfo}>{player.country_name}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Search for player" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default SearchBar;
