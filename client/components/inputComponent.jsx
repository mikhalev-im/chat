import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
  render() {
    return (
      <div className="form-input">
        <input className="input" type="text" id="textField"/>
        <button className="btn btn-send" id="btnSend">Send</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('input')
)