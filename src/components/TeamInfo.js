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

  return (
    null

  );
}

export default TeamInfo;
