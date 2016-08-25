import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    var i = 0;
    return (
      <div>
        {this.props.messages.map( (m) => <p key = {i++} className='message'>{m.nick + ": " + m.message}</p> )}
      </div>
    );
  }
}

let mes = [];

function renderMessages() {
  ReactDOM.render(
    <Message messages={mes} />,
    document.getElementById('messages')
  )
}

export function addMessage(message) {
  mes.push(message);
  renderMessages();
}






