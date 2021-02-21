import React from 'react';
import PlayerData from '../data/PlayerData';

const PlayerItem = ({ player, onPlayerSelect }) => {
  return (
    <div onClick={() => onPlayerSelect(player)} className="player-item item">
      <div className="content">
        <div className="header">{PlayerData.player_name}</div>
      </div>
    </div>
  );
};

export default PlayerItem;
