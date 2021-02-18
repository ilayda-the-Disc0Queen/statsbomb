import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamInfo() {
  // const express = require('express');
  const cors = require('cors')
  // const app = express();
  // const port = 9000;

  const [ teamData, setTeamData ] = useState([]);

  const getTeamData = () => {
    // app.get('/api/getAccountList', cors(), (req, res)=>{})
    axios.get('http://localhost:9000/testAPI/match-data.json', cors(), (req, res)=>{})
      .then((response) => {
        // console.log(response)
        return response.data;
      })
      .then(function(myJson) {
        // console.log(myJson);
        setTeamData(myJson)
      });
  }

  useEffect(()=>{
    getTeamData()
  })

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
