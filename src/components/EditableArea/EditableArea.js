import React from 'react';
import ContentEditable from "react-contenteditable";

import "./EditableArea.css";

const EditableArea = (props) => {
  return(
    <div id={props.dropId}>
      <div id={props.statusId}>Drag and Drop the files from a folder to a selected area ...</div>
      <div id={props.listId} />
      <br />
      <ContentEditable
        id={props.textAreaId}
        html={props.html} // innerHTML of the editable div
        onChange={props.change} // handle innerHTML change
        onKeyPress={props.emoticons}
      />
    </div>
  )
}

export default EditableArea;
