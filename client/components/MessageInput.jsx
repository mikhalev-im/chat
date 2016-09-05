import React from 'react';
import ReactDOM from 'react-dom';
import { socket } from '../libs/socket.js';

export class MessageInput extends React.Component {
  constructor() {
    super();
    this.updateText = this.updateText.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      text: ""
    }
  }

  componentDidMount() {
    let node = ReactDOM.findDOMNode(this.refs.formSubmit);
    node.addEventListener('submit', this.sendMessage);
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  sendMessage(e) {
    e.preventDefault();
    if (this.state.text === "") {
      return;
    }
    socket.emit('message', {nick: 'C1one', message: this.state.text});
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <form className="form-input" ref="formSubmit">
        <input className="input" type="text" value={this.state.text} onChange={this.updateText}/>
        <button type="submit" className="btn btn-send" onSubmit={this.sendMessage}>Send</button>
      </form>
    );
  }
}