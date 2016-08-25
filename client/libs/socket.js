import io from 'socket.io-client';
import {addMessage} from './../components/messageComponent.jsx';

const textField = document.getElementById('textField');
const socket = io.connect();


socket.on('message', function(data) {
  console.log(data);
});

function init() {
  var btn = document.getElementById('btnSend');

  btn.addEventListener('click', sendMessage);
}

function sendMessage() {
  if (textField.value === "") {
    return;
  }

  socket.emit('message', {nick: 'C1one_38', message: textField.value});
  addMessage({nick: 'C1one_38', message: textField.value});
  textField.value = "";
}

window.onload = init();