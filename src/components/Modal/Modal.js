import React from 'react';

import './Modal.css'

const Modal = (props) => {
  return(
    <div id="myModal" className="modal" >
      <div className="modal-content">
        <span className="close" onClick={props.click}>&times;</span>
        <div id="modal"></div>
        <p>{props.html}</p>
      </div>
    </div>
  )
}

export default Modal;
