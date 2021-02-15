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
    <div className="Player">
     <h2>Player data!</h2>
     {
       playerData && playerData.length > 0 && playerData.map((player) =>
        <p key={player.player_id}>{player.player_name}</p>
        )
     }
    </div>
  );
}

export default PlayerInfo;
