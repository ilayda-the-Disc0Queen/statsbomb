import React, { useState, useEffect } from 'react';

function MatchInfo() {
  const [ matchData, setMatchData ] = useState([]);

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

  return (
    <div className="Match">
      <h1>Match data!</h1>
     {
       matchData && matchData.length > 0 && matchData.map((match) =>
        <p key={match.match_id}>{match.match_date}</p>
        )
     }
    </div>
  );
}

export default MatchInfo;
