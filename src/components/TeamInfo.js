import React, { useState, useEffect } from 'react';

function TeamInfo() {
  const [ teamData, setTeamData ] = useState([]);

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

  // const teamColour = (team) => {color: team.team_first_color};

  return (
    <div className="Team">
     <h2>Team data!</h2>
     {
       teamData && teamData.length > 0 && teamData.map((team) =>
        <p key={team.team_id}>{team.team_name}</p>
        )
     }
    </div>
  );
}

export default TeamInfo;
