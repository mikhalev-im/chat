import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

const socket = io.connect();

class Message extends React.Component {
  constructor() {
    super();
    this.state = {messages: [], text: ""};
  }

  componentDidMount() {
    socket.on('message', this.pushNewMessage);
  }

  pushNewMessage(m) {
    let arr = this.state.messages;
    arr.push(m);
  }

  sendMessage() {
    socket.emit('message', {nick: 'C1one', message: this.state.text});
    this.pushNewMessage(this.state.text);
  }

  updateText(e) {
    this.state.text = e.target.value;
    e.target.value = "";
  }

  render() {
    var i = 0;
    return (
      <div>
        <div className="form-messages">
          {this.state.messages.map( (m) => <p key = {i++} className='message'>{m.nick + ": " + m.message}</p> )}
        </div>
        <div className="form-input">
          <input className="input" type="text" onChange={this.updateText}/>
          <button className="btn btn-send" onClick={this.sendMessage()}>Send</button>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Message />,
  document.getElementById('container')
)

