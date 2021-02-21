import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function PlayerInfo() {
  const [ playerData, setPlayerData ] = useState([]);

  const getPlayerData = () => {
    fetch('player-data.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setPlayerData(myJson)
      });
  }

  useEffect(()=>{
    getPlayerData()
  },[])

     // ---- Use with a search input to get transaction by ID ---- //
  const getPlayerBySearch = (player, data) => {
    const playerArray = []
    return !!data.length && data.filter((item) => {
      if (item.player_name.includes(player)) {
        playerArray.push(item)
      }
      return playerArray
    })[0]
  }

  return (
    <div className="player ui raised very padded text container segment">
      <SearchBar />
    </div>
  )
}

export default PlayerInfo;
