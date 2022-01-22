import React, { useState } from 'react';
import './Toggable.css';
import axios from 'axios';
import VirtualList from '../VirtualList/VirtualList';

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);
  const [games, setGames] = useState([]);

  const data = props.data;

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = async () => {
    setVisible(!visible);
    if (games.length === 0) {
      const response = await axios.get(`https://good-api222.herokuapp.com/rps/games/${data._id}`);
      setGames(response.data.games);
      console.log('done');
    }
  };

  return (
    <div className='toggable'>
      <div style={hideWhenVisible}>
        <div className='header' onClick={toggleVisibility}>
          <div className='flex'>{data._id}</div>
          <div className='flex'>Games {data.games}</div>
          <div className='flex'>Wins {Number(data.wins / data.games * 100).toFixed(2)}%</div>
        </div>
      </div>
      <div style={showWhenVisible}>
        <div className='header' onClick={toggleVisibility}>
          <div className='flex'>{data._id}</div>
          <div className='flex'>Games {data.games}</div>
          <div className='flex'>Wins {Number(data.wins / data.games * 100).toFixed(2)}%</div>
        </div>
        <div className='content'>
          {games.length === 0 && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
          {games.length !== 0 && <VirtualList games={games} />}
        </div>
      </div>
    </div>
  );
};

export default Togglable;
