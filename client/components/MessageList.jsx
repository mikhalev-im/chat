import React from 'react';
import { Message } from './Message.jsx';

export const MessageList = (props) => {
  return (
    <ul className="message-list">
      {props.messages.map( m => <Message key={m.id} nick={m.nick} message={m.message} />)}
    </ul>
  );
}