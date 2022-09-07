import React from 'react';
import './IconSwitch.css';

function IconSwitch({icon, onSwitch}) {
  return (
    <div className={'icon'}>
      <span className={'material-icons'} onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}
export default IconSwitch;