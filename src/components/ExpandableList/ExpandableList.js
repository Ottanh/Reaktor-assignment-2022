import React from 'react';

import Togglable from '../Togglable/Togglable';
import './ExpandableList.css';

const ExpandableList = ({ data }) => {
  return (
    <div className='listWrapper'>
      <ul>
        {data.map(data => (
          <li key={data._id}>
            <Togglable data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpandableList;
