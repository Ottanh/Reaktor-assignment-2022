import { React, useState } from 'react';

import Scoreboard from './components/Scoreboard';
import './App.css';

const webSocket = new WebSocket('wss://bad-api-assignment.reaktor.com/rps/live');

const App = () => {
  const [liveGames, setliveGames] = useState([]);

  webSocket.onmessage = (event) => {
    const msg = JSON.parse(JSON.parse(event.data));
    const index = liveGames.findIndex(el => el.gameId === msg.gameId);
    console.log(msg);

    const copy = [...liveGames];

    if (index === -1 && msg.type === 'GAME_BEGIN') {
      setliveGames([msg, ...liveGames]);
    } else {
      copy[index] = msg;
      setliveGames(copy);
    }
  };

  return (

    <div className='fadeDiv'>
      <h1>Live games</h1>
      <div className='scrollDiv'>
        <Scoreboard liveGames={liveGames} />
      </div>
    </div>

  );
};

export default App;
