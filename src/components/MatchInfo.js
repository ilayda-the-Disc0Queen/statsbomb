import React, { useState, useEffect } from 'react';
import MatchData from '../data/MatchData';
import TeamData from '../data/TeamData';
import StatData from '../data/StatData';
import PlayerData from '../data/PlayerData';

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




  //


  const wereTherePenalties = (match) => {
    return match.match_home_score === match.match_away_score
  }
// I know this can be done one 1 line, but right now I just need it to work!

  const isHomePenaltyNull = (match) => {
    if (wereTherePenalties(match)) {
      return <p>Penalties = {match.match_home_penalty_score}</p>
    }
  }

  const isAwayPenaltyNull = (match) => {
    if (wereTherePenalties(match)) {
      return <p>Penalties = {match.match_away_penalty_score}</p>
    }
  }

  // WHAT I WANNA GET DONE BEFORE SUBMITTING!⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
  // in the match info boxes:
  // select top player from match ID for both home and away team
  // and display name, country, minutes played, goals and total passes (left + right foot)

  const getHomeTeamColour = (match) => {
    let colour
    TeamData.forEach((team) => {
      if (team.team_id === match.match_home_team_id )
        colour = team.team_first_color
    })
    return colour
  }

  const getAwayTeamColour = (match) => {
    let colour
    TeamData.forEach((team) => {
      if (team.team_id === match.match_away_team_id )
        colour = team.team_first_color
    })
    return colour
  }

  const getHomeTeamName = (match) => {
    let name
    TeamData.forEach((team) => {
      if (match.match_home_team_id === team.team_id)
        name = team.team_name
    })
    return name
  }

  const getAwayTeamName = (match) => {
    let name
    TeamData.forEach((team) => {
      if (match.match_away_team_id === team.team_id)
        name = team.team_name
    })
    return name
  }

  const getPlayerName = (playerArray) => {
    let playerName
    PlayerData.forEach((player) => {
      if (player.player_id === playerArray.player_id)
        playerName = playerArray.player_name
    })
    return playerName
  }

  const topHomePlayers = (match) => {
    let topHomePlayersArray = []
    StatData.forEach((stat) => {
      if (match.match_home_team_id === stat.team_id)
        topHomePlayersArray.push(stat.player_id)
    })
    console.log(topHomePlayersArray);
    return topHomePlayersArray
  }


  return (
    <div className="match ui raised very padded text container segment">
      <h1>Match data!</h1>
      <div className="ui left aligned grid">
        <div className="eight wide column">
          {
           matchData && matchData.length > 0 && sortedScoreData.map((match) =>
            <div className="ui container segment" key={match.match_id}>
              <p>Home team = {getHomeTeamName(match)}</p>
              <p>Goals = {match.match_home_score}</p>
              {isHomePenaltyNull(match)}
              <i style={{ color: getHomeTeamColour(match), fontSize: 30}} className="fas fa-tshirt"></i>
            </div>
            )
          }
        </div>
        <div className="eight wide column">
          {
           matchData && matchData.length > 0 && sortedScoreData.map((match) =>
            <div className="ui container segment" key={match.match_id}>
              <p>Away team = {getAwayTeamName(match)}</p>
              <p>Goals = {match.match_away_score}</p>
              {isAwayPenaltyNull(match)}
              <i style={{ color: getAwayTeamColour(match), fontSize: 30}} className="fas fa-tshirt"></i>
            </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MatchInfo;


