import React from 'react';

import Togglable from '../Togglable/Togglable';
import './ExpandableList.css'
import VirtualList from '../VirtualList/VirtualList'


const ExpandableList = ({ data }) => {


  return(
    <div className='listWrapper'>
      <ul>
      {data.map(data => (
        <li key={data._id}>
          <Togglable data={data}>
            <VirtualList player={data._id}/>
          </Togglable>
        </li>
      ))}
      </ul>
    </div>
  )


}



export default ExpandableList;