import React from 'react';
import MatchInfo from './components/MatchInfo';
import PlayerInfo from './components/PlayerInfo';
import StatInfo from './components/StatInfo';
import TeamInfo from './components/TeamInfo';

function App() {
  return (
    <div className="App">
     <MatchInfo/>
     <PlayerInfo/>
     <StatInfo/>
     <TeamInfo/>
    </div>
  );
}

export default App;
