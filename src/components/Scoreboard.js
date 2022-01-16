import React from 'react';

import './Scoreboard.css';

const Scoreboard = ({ liveGames }) => {

  return (
    <table>
      <tbody>
        {liveGames.map(game => {
          return (
            <tr key={game.gameId}>
              <th>{game.type}</th>
              <th>{game.playerA.name}</th>
              <th>{game.playerA.played}</th>
              <th>{game.playerA.played}</th>
              <th>{game.playerB.name}</th>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

}

export default Scoreboard;