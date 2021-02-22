import React, { Component } from 'react';
import PlayerData from '../data/PlayerData';
import StatData from '../data/StatData';

class SearchBar extends Component {
  state = {
    displayPlayerStats: false
  }
  // we need to set up the state which would change as the content in search box changes
  constructor(){
    super();

    this.state={
      searchTerm: '',
      isHidden: true
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden(){
    this.setState({ isHidden: !this.state.isHidden });
  }

  // add a function that captures the event of the search box on change and set
  // the value of the search box to the state variable
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({searchTerm:keyword})
    console.log(this.state)
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }

    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      // position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }

    function handleClick(e) {
    e.preventDefault();
    }

    const getPlayerStats = (player) => {
      let stats
      StatData.forEach((stat) => {
        if (player.player_id === stat.player_id) {
          stats = stat
          return stats
        } else {
          // console.log("No extra information available!");
          return
        }
      })
    }

    const displayPlayerStats = () => {
      this.setState({
        displayPlayerStats: !this.state.displayPlayerStats
      })
    }

    // const extraPlayerStats = (player) => {
    //   return (
    //    <div className="extra-stats">
    //     <p>{StatData.title}</p>
    //    </div>
    //   )
    //  };

    function displayMorePlayerInfo(player) {
        <div>WANNA SEE SOME MORE, GO ON DEN MY GUY</div>
        alert("Great Shot!");
     }

    const individualPlayer = (player) => {
      return (
        <div onClick={displayPlayerStats} key={player.player_id} className="individual-player ui segment">
          <ul>
            <li style={{position:'relative',left:'10vh'}}>
              <span style={styleInfo}>{player.player_name},</span>
              <span style={styleInfo}>{player.country_name}</span>
            </li>
          </ul>
        </div>
      );
    };

    const players = PlayerData.filter((data)=>{
      if(this.state.searchTerm == null)
          return data
      else if(data.player_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || data.country_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
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
      <input type="text" placeholder="Search for player" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      <div onClick={(e)=>console.log(e)}>{players}</div>
      </div>
    )
  }
}

export default SearchBar;
