import React from 'react';
import './popcssD.css';
const PopupD = (props) => {
  return (
    <div className='popup-box  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default PopupD;
