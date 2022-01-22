import { React, useState, useEffect } from 'react';

import Scoreboard from './components/Scoreboard/Scoreboard';
import './App.css';
import axios from 'axios';

import ExpandableList from './components/ExpandableList/ExpandableList';

const webSocket = new WebSocket('wss://bad-api-assignment.reaktor.com/rps/live');

const App = () => {
  const [liveGames, setliveGames] = useState([]);
  const [stats, setStats] = useState([]);

  const [altRow, setaltRow] = useState(false);

  webSocket.onmessage = (event) => {
    const msg = JSON.parse(JSON.parse(event.data));
    const index = liveGames.findIndex(el => el.gameId === msg.gameId);
    // console.log(msg);

    const copy = [...liveGames];

    if (index === -1 && msg.type === 'GAME_BEGIN') {
      setliveGames([msg, ...liveGames]);
      setaltRow(!altRow);
    } else {
      copy[index] = msg;
      setliveGames(copy);
    }
  };

  useEffect(() => {
    axios.get('https://good-api222.herokuapp.com/rps/stats')
      .then(response => {
        setStats(response.data);
        console.log('done');
      });
  }, []);

  useEffect(() => {
    axios.get('https://good-api222.herokuapp.com/rps/stats')
      .then(response => {
        setStats(response.data);
        console.log('done');
      });
  }, []);

  
  return (

    <div className='app'>
      <div className='liveDiv'>
        <div className='fadeDiv'>
          <h1>Live games</h1>
          <div className='scrollDiv'>
            <Scoreboard liveGames={liveGames} classname='className' altRow={altRow} />
          </div>
        </div>
      </div>

      <div className='statsDiv'>
        <h1>Historical stats</h1>
        <div className='statsContainer'>
          <ExpandableList data={stats} />
        </div>
      </div>
    </div>

  );
};

export default App;
