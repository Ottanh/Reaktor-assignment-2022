import React, { useState } from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';
import Togglable from '../Togglable/Togglable';
import './ExpandableList.css'


const ExpandableList = ({ data, liveGames }) => {


  return(
    <div className='listWrapper'>
      <ul>
      {data.map(data => (
        <li key={data._id}>
          <Togglable data={data}>
            <Scoreboard liveGames={liveGames} />
          </Togglable>
        </li>
      ))}
      </ul>
    </div>
  )


}



export default ExpandableList;