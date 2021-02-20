import React, { useState, useEffect } from 'react';

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
      <h1>Player data!</h1>
      <div className="ui grid">
        <div className="eight wide column">
        </div>
        <div className="eight wide column">
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo;
