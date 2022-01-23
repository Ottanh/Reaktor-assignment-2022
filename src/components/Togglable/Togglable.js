import React, { useState } from 'react';
import './Toggable.css';
import axios from 'axios';
import VirtualList from '../VirtualList/VirtualList';

import rock from '../images/rock.png';
import scissors from '../images/scissors.png';
import paper from '../images/paper.png';

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);
  const [games, setGames] = useState([]);

  const data = props.data;

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  // Toggle visible content and load games from good-api if it has not yet been done
  const toggleVisibility = async () => {
    setVisible(!visible);
    if (games.length === 0) {
      const response = await axios.get(`https://good-api-eu.herokuapp.com/rps/games/${data._id}`);
      setGames(response.data.games);
      console.log('done');
    }
  };

  let mostPlayed;
  if (data.ROCK >= data.PAPER && data.ROCK >= data.SCISSORS) {
    mostPlayed = <img src={rock} alt='ROCK' width={40} />;
  } else if (data.PAPER >= data.ROCK && data.PAPER >= data.SCISSORS) {
    mostPlayed = <img src={scissors} alt='PAPER' width={40} />;
  } else if (data.SCISSORS >= data.ROCK && data.SCISSORS >= data.PAPER) {
    mostPlayed = <img src={paper} alt='SCISSORS' width={40} />;
  }

  return (
    <div className='toggable'>
      <div style={hideWhenVisible}>
        <div className='header' onClick={toggleVisibility} data-testid='header'>
          <div className='flex'>{data._id}</div>
          <div className='flex'>Games: {data.games}</div>
          <div className='flex'>Wins: {Number(data.wins / data.games * 100).toFixed(2)}%</div>
          <div className='flex'>Most played:</div>
          {mostPlayed}
        </div>
      </div>
      <div style={showWhenVisible} data-testid='togglableContent'>
        <div className='header' onClick={toggleVisibility}>
          <div className='flex'>{data._id}</div>
          <div className='flex'>Games: {data.games}</div>
          <div className='flex'>Wins: {Number(data.wins / data.games * 100).toFixed(2)}%</div>
          <div className='flex'>Most played:</div>
          {mostPlayed}
        </div>
        <div className='content' data-testid='content'>
          {games.length === 0 && <div className='lds-ellipsis'><div /><div /><div /><div /></div>}
          {games.length !== 0 && <VirtualList games={games} player={data._id} />}
        </div>
      </div>
    </div>
  );
};

export default Togglable;
