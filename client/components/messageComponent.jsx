import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <p className='message'>{this.props.message}</p>
    );
  }
}

ReactDOM.render(
  <Message message="HEY HEY HEY" />,
  document.getElementById('example')
)