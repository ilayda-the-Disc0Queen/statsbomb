import React, { useState, useEffect } from 'react';
import MatchData from '../data/MatchData';

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

  // ----- SORTING MATCHES ----------//

  // sorts array by date //
  const sortedMatchData = MatchData.sort((a, b) => (a.match_date > b.match_date) ? 1 : -1)
  // as the dates do not sort by month, take the end two dates (from June) and put them at the start
  sortedMatchData.unshift(sortedMatchData[sortedMatchData.length - 2], sortedMatchData[sortedMatchData.length - 1])
  // then remove them from the end
  sortedMatchData.splice(-2)

  // ----- Get Matches in order of goals scored ------- //
  const sortedScoreData = MatchData.sort((a, b) => ((a.match_home_score + a.match_away_score)
    < (b.match_home_score + b.match_away_score)
    ) ? 1 : -1)
    Object.keys(sortedScoreData);

  // ----- Get Matches in order of total penalty scores ------ //
  const sortedPenlatyData = MatchData.sort((a, b) => ((a.match_home_penalty_score + a.match_away_penalty_score)
    < (b.match_home_penalty_score + b.match_away_penalty_score)
    ) ? 1 : -1)


    // ---- Use with a search input to get transaction by ID ---- //
  const getMatchById = (id, data) => {
    return !!data.length && data.filter((item) => {
      if (item.transactionId === id) {
        return item
      }
    })[0]
  }

  // const homePenaltyNull = (match) => {
  //   if (match.match_home_penalty_score == null) {
  //     return
  //   } else {
  //     <p>Penalties = {match.match_home_penalty_score}</p>
  //   }
  // }

  // const awayPenaltyNull = (match) => {
  //   if (match.match_away_penalty_score == null) {
  //     return
  //   } else {
  //     <p>Penalties = {match.match_away_penalty_score}</p>
  //   }
  // }

  return (
    <div className="match ui raised very padded text container segment">
      <h1>Match data!</h1>
      <div className="ui grid">
        <div className="eight wide column">
          {
           matchData && matchData.length > 0 && sortedScoreData.map((match) =>
            <div className="ui container segment" key={match.match_id}>
              <p>Home team = {match.match_home_team_id}</p>
              <p>Goals = {match.match_home_score}</p>
            </div>
            )
          }
        </div>
        <div className="eight wide column">
          {
           matchData && matchData.length > 0 && sortedScoreData.map((match) =>
            <div className="ui container segment" key={match.match_id}>
              <p>Away team = {match.match_away_team_id}</p>
              <p>Goals = {match.match_away_score}</p>
            </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MatchInfo;

// {
//        matchData && matchData.length > 0 && matchData.map((match) =>
//         <p key={match.match_id}>{sortedMatchData}</p>
//         )
//       }



