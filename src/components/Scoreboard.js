import React from 'react';

import './Scoreboard.css';
import rock from './rock.png';
import scissors from './scissors.png';
import paper from './paper.png';

const Scoreboard = ({ liveGames }) => {
  return (
    <table>
      <tbody>
        {liveGames.map(game => {
          const playerA = game.playerA;
          const playerB = game.playerB;
          return (
            <tr key={game.gameId}>
              <th>{playerA.name}</th>
              <th>
                {playerA.played === 'ROCK' &&
                  <img src={rock} alt='ROCK' width={50} />}
                {playerA.played === 'SCISSORS' &&
                  <img src={scissors} alt='ROCK' width={50} />}
                {playerA.played === 'PAPER' &&
                  <img src={paper} alt='ROCK' width={50} />}
              </th>
              <th className='VS'>VS</th>
              <th>
                {playerB.played === 'ROCK' &&
                  <img src={rock} alt='ROCK' width={50} />}
                {playerB.played === 'SCISSORS' &&
                  <img src={scissors} alt='ROCK' width={50} />}
                {playerB.played === 'PAPER' &&
                  <img src={paper} alt='ROCK' width={50} />}
              </th>
              <th>{playerB.name}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Scoreboard;
