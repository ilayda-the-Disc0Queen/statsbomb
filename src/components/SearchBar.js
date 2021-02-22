import React, { Component } from 'react';
import PlayerData from '../data/PlayerData';
import StatData from '../data/StatData';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    displayPlayerStats: false
  }
  // we need to set up the state which would change as the content in search box changes
  constructor(){
    super();

    this.state={
      searchTerm: '',
    }
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
      left:'10vh',
      height:'4vh',
      width:'100%',
      marginTop:'5vh',
      marginBottom:'10vh'
    }

    const getPlayerStats = (player) => {
      let stats
      StatData.forEach((stat) => {
        if (stat.player_id === player.player_id) {
          stats = stat
          return
        }
      })
        return stats
    }

    const displayMorePlayerInfo = (player) => {
      if ((getPlayerStats(player)) !== undefined) {
        alert(
          player.player_name + 'plays for' + player.country_name
        )
      }

     }

    const individualPlayer = (player) => {
      return (
        <div onClick={() => {displayMorePlayerInfo(player)}} key={player.player_id} className="individual-player ui segment">
          <ul>
            <li style={{left:'10vh'}}>
              <span style={styleInfo}>{player.player_name}</span>
            </li>
          </ul>
        </div>
      );
    };

    const players = PlayerData.filter((data)=>{
      if(this.state.searchTerm == null) {
        return null
      } else if(data.player_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || data.country_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
          return data
      }
    }).map(player=>{
      return(
        <div>
          {individualPlayer(player)}
        </div>
      );
    })

    return (
      <div>
      <input type="text" placeholder="Search for a player by name or country" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {/* <div onClick={(e)=>console.log(e)}>{players}</div> */}
      <div>{players}</div>
      </div>
    )
  }
}

export default SearchBar;
