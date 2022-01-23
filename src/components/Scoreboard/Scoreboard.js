import React from 'react';

import Row from './Row/Row';
import './Scoreboard.css';

const Scoreboard = ({ liveGames, altRow }) => {
  return (
    <table className='scoreboard'>
      <tbody>
        {liveGames.map(game => (
          <Row playerA={game.playerA} playerB={game.playerB} key={game.gameId} altRow={altRow} />
        ))}
      </tbody>
    </table>
  );
};

export default Scoreboard;
