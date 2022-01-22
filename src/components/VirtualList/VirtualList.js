
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FixedSizeList as List } from 'react-window';
import './VirtualList.css';

 

const Row = ({ index, style, data }) => {

  const date = new Date(data[index].t);

  return (
    <div style={style}>
      <div className='container'>
        <div className='flex'>{date.toISOString()}</div>
        <div className='flex'>PlayerA</div>
        <div className='flex'>ROCK</div>
        <div className='flex'>PAPER</div>
        <div className='flex'>PlayerB</div>
      </div>
    </div>
  )
};


const Example = ({player}) => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`https://good-api222.herokuapp.com/rps/games/${player}`)
      .then(response => {
        console.log(response);
        setGames(response.data.games);
        console.log("done")
      })
  },[player])

  console.log(games);

  return (
  <List
    itemCount={games.length}
    itemSize={25}
    width={620}
    height={500}
    itemData={games}
  >
    {Row}
  </List>

  )

};


export default Example;
