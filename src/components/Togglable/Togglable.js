import React, { useState } from 'react';
import './Toggable.css';

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div className='toggable'>
      <div style={hideWhenVisible}>
        <div className='header' onClick={toggleVisibility}>{props.buttonLabel} player  wins  games  most played</div>
      </div>
      <div style={showWhenVisible}>
      <div className='header' onClick={toggleVisibility}>{props.buttonLabel} player  wins  games  most played</div>
      <div className='content'>
        {props.children}   
      </div>
      </div>
    </div>
  )
}

export default Togglable