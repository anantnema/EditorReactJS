import React, { Component } from 'react';

import ButtonCollection from "../components/Button/ButtonCollection";
import Modal from "../components/Modal/Modal";
import EditableArea from '../components/EditableArea/EditableArea';



class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
      html: `Hello World !Paragraph 2`,
      link: "http://google.co.in/"
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChangeForLink = e => {
    this.setState({ link: e.target.value });
  }
  handleChange = e => {
    this.setState({ html: e.target.value });
  };


  showModal = () => {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  spanClose = () => {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  componentDidMount(){
    //for Modal
    var modal = document.getElementById('myModal');
    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
    }
    //for drag and drop of a image file
    if (window.FileReader) {
      var drop;
      addEventHandler(window, 'load', function() {
        drop = document.getElementById('drop');
        var list = document.getElementById('list');
        function cancel(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }
          return false;
        }

        // Tells the browser that we *can* drop on this target
        addEventHandler(drop, 'dragover', cancel);
        addEventHandler(drop, 'dragenter', cancel);

        addEventHandler(drop, 'drop', function(e) {
          e = e || window.event; // get window.event if e argument missing (in IE)
          if (e.preventDefault) {
            e.preventDefault();
          } // stops the browser from redirecting off to the image.

          var dt = e.dataTransfer;
          var files = dt.files;
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();

            //attach event handlers here...

            reader.readAsDataURL(file);
            addEventHandler(reader, 'loadend', function(e, file) {
              var bin = this.result;
              var newFile = document.createElement('div');
              list.appendChild(newFile);

              var img = document.createElement("img");
              var imgPreview = document.createElement("img");

              img.file = file;
              img.src = bin;
              imgPreview.file = file;
              imgPreview.src = bin;

              modal.appendChild(imgPreview);
              list.appendChild(img);

            }.bindToEventHandler(file));
          }
          return false;
        });
        Function.prototype.bindToEventHandler = function bindToEventHandler() {
          var handler = this;
          var boundParameters = Array.prototype.slice.call(arguments);
          console.log(boundParameters);
          //create closure
          return function(e) {
            e = e || window.event; // get window.event if e argument missing (in IE)
            boundParameters.unshift(e);
            handler.apply(this, boundParameters);
          }
        };
      });
    } else {
      document.getElementById('status').innerHTML = 'Your browser does not support the HTML5 FileReader.';
    }

    function addEventHandler(obj, e, handler) {
      if (obj.addEventListener) {
        obj.addEventListener(e, handler, false);
      }
    }
  }

  _downloadTxtFile = () => {
   var element = document.createElement("a");
   var file = new Blob([document.getElementById('list').innerHTML ,this.state.html], {type: 'html'});
   element.href = URL.createObjectURL(file);
   element.download = "myFile.html";
   element.click();
 }


  render() {
    return (
      <div>
        <h1>Editor</h1>
        <ButtonCollection
            ModalClick={this.showModal}
            DownloadClick={this.downloadFile}
            link = {this.state.link}
            change={this.handleChangeForLink}
        />
        <EditableArea
            dropId="drop"
            statusId="status"
            listId="list"
            textAreaId="textArea"
            html={this.state.html}
            change={this.handleChange}
        />
        <Modal click={this.spanClose}
          html={this.state.html}
        />
      </div>
    );
  }
}


export default Editor;
