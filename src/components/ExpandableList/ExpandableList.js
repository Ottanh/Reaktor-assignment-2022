import React, { useState } from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';
import Togglable from '../Togglable/Togglable';
import './ExpandableList.css'


const ExpandableList = ({ data, liveGames }) => {


  return(
    <div className='listWrapper'>
      <ul>
      {data.map(dat => (
        <li key={dat}>
          <Togglable buttonLabel='avaa'>
            <Scoreboard liveGames={liveGames} />
          </Togglable>
        </li>
      ))}
      </ul>
    </div>
  )


}



export default ExpandableList;