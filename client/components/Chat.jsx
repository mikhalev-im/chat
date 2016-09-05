import React from 'react';
import ReactDOM from 'react-dom';
import { socket } from '../libs/socket.js';
import { MessageList } from './MessageList.jsx';
import { MessageInput } from './MessageInput.jsx';


export class Chat extends React.Component {
  constructor() {
    super();
    this.addNewMessage = this.addNewMessage.bind(this);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    socket.on('message', this.addNewMessage);
  }

  addNewMessage(m) {
    let arr = this.state.messages.slice();
    arr.push(m);

    this.setState({
      messages: arr
    });
  }

  render() {
    return (
      <section className="chat">
        <MessageList messages={this.state.messages} />
        <MessageInput />
      </section>
    );
  }
}


ReactDOM.render(
  <Chat />,
  document.getElementById('container')
);

