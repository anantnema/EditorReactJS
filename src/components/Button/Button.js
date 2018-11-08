import React from 'react';

const Button = (props) => {
 return (
   <button
     key={props.cmd}
     onMouseDown={evt => {
       console.log(props.arg);
       evt.preventDefault(); // Avoids loosing focus from the editable area
       document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
     }}
   >
     {props.name || props.cmd}
   </button>
 );
}

export default Button;
