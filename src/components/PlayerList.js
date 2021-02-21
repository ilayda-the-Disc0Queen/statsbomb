import React from 'react';
import PlayerItem from './PlayerItem';

const PlayerList = ({ players, onPlayerSelect }) => {
  const renderedList = players.map(player => {
    return (
      <PlayerItem
        key={player.player_id}
        onVideoSelect={onPlayerSelect}
        player={player}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default PlayerList;
