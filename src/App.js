import React from 'react';
import MatchInfo from './components/MatchInfo';
import PlayerInfo from './components/PlayerInfo';
import StatInfo from './components/StatInfo';
import TeamInfo from './components/TeamInfo';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <MatchInfo/>
      <PlayerInfo/>
      <StatInfo/>
      <TeamInfo/>
    </div>
  );
}

export default App;
