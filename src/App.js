import React, { useState, useEffect } from 'react';

function App() {
  const [ matchData, setMatchData ] = useState([]);
  const [ playerData, setPlayerData ] = useState([]);
  const [ statData, setStatData ] = useState([]);
  const [ teamData, setTeamData ] = useState([]);

  const getMatchData = () => {
    fetch('match-data.json'
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
        setMatchData(myJson)
      });
  }

  useEffect(()=>{
    getMatchData()
  },[])

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

  const getStatData = () => {
    fetch('stat-data.json'
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
        setStatData(myJson)
      });
  }

  useEffect(()=>{
    getStatData()
  },[])

  const getTeamData = () => {
    fetch('team-data.json'
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
        setTeamData(myJson)
      });
  }


  useEffect(()=>{
    getTeamData()
  },[])

  return (
    <div className="App">
      <h1>Match data!</h1>
     {
       matchData && matchData.length > 0 && matchData.map((match) =>
        <p key={match.match_id}>{match.match_date}</p>
        )
     }
     <h2>Player data!</h2>
     {
       playerData && playerData.length > 0 && playerData.map((player) =>
        <p key={player.player_id}>{player.player_name}</p>
        )
     }
     <h2>Stat data!</h2>
     {
       statData && statData.length > 0 && statData.map((stat) =>
        <p>shots: {stat.shots}</p>
        )
     }
     <h2>Team data!</h2>
     {
       teamData && teamData.length > 0 && teamData.map((team) =>
        <p key={team.team_id}>{team.team_name}</p>
        )
     }
    </div>
  );
}

export default App;
