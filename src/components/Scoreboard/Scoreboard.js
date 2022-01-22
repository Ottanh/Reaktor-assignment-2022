import React from 'react';

import Cell from './Cell/Cell';
import './Scoreboard.css';

const Scoreboard = ({ liveGames, altRow }) => {
  return (
    <table className='scoreboard'>
      <tbody>
        {liveGames.map(game => (
          <Cell playerA={game.playerA} playerB={game.playerB} key={game.gameId} />
        ))}
      </tbody>
    </table>
  );
};

export default Scoreboard;
