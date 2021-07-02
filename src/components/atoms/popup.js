import React from 'react';
import './popupcss.css';
import "../atoms/clientArchive.css"
const Popup = (props) => {
  return (
    <div className={`popup-box `} style={{zIndex:2}} >
      <div className={`box   ${props.specificClass&&props.specificClass }`} style={props.specificStyle && props.specificStyle} >
        {!props.removeX&&
        <span className='close-icon' style={props.styleX&&{position:"absolute" , top:"4%" , left:"4%"}} onClick={props.handleClose}>
          x
        </span>
        }
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
