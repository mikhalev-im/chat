import React from 'react';

export const Message = (props) => {
  return (
    <li className="message"><span className="nickname">{props.nick + ": "}</span>{props.message}</li>
  );
}