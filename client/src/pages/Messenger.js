// React 
import React, { useState, useEffect } from 'react';
import MessagesBox from '../components/MessagesBox'
import MessagingForm from '../components/MessagingForm'

// socket imports
import io from 'socket.io-client';

// Styles
import '../styles/pages/Messenger.css'

// socket variables
const socket = io();

export default function Messenger() {
  // set variables
  const [messagesData, setMessagesData] = useState([]);
  const [newMessage, setNewMessage] = useState('');


  // Receive message from server and addes to messages
  socket.on('messenger', (message) => {
    console.log('Message from Server: ', message);
    setMessagesData([...messagesData, message]);});

  // helping functions
  // send new message to server
  const sendNewMessageToServer = () => {
    console.log('This happened');
    socket.emit('messenger', newMessage);
  }

  // handles message submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessagesData([...messagesData, newMessage]);
    sendNewMessageToServer();
    setNewMessage('');
  };

  // contact back end and send updated message
  return (
    <div>
      <MessagesBox messagesData={messagesData} />
      <MessagingForm newMessage={newMessage} setNewMessage={setNewMessage} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}