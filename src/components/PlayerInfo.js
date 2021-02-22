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

  return (
    <div className="player ui raised very padded text container segment">
      <div>
      <h1 className="Title">Search for players</h1>
      <SearchBar
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
       />
      </div>
    </div>
  )
}

export default PlayerInfo;
