import React from 'react';
import Button from './Button';

const ButtonCollection = (props) => {
  return(
    <div>
      <Button name="B" cmd="bold" />
      <Button name="I" cmd="italic" />
      <Button name="U" cmd="underline" />
      <Button name="Highlight" cmd="hiliteColor" arg="#FFFF00" />
      <Button name="Undo" cmd="Undo" />
      <Button name="Redo" cmd="redo" />
      <button onClick={props.ModalClick}>Preview</button>
      <button onClick={props.DownloadClick}>Download</button>
      <input type="text" id="url" size="30" value={props.link} onChange={props.change} />
      <Button
        cmd="createLink"
        arg={props.link}
        name="Hyperlink"
      />
    </div>
  )
}

export default ButtonCollection;
