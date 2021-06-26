import React from 'react';
import './popupcss.css';
const Popup = (props) => {
  return (
    <div className='popup-box' >
      <div className='box' style={props.specificStyle && props.specificStyle} >
        {!props.removeX&&
        <span className='close-icon' onClick={props.handleClose}>
          x
        </span>
        }
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
