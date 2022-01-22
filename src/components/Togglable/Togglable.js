import React, { useState } from 'react';
import './Toggable.css';

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const data = props.data;

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

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
        {props.children}   
      </div>
      </div>
    </div>
  )
}

export default Togglable