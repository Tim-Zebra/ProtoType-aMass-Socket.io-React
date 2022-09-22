// React 
import React, { useState, useEffect } from 'react';
import MessagesBox from '../components/MessagesBox'
import MessagingForm from '../components/MessagingForm'

// Styles
import '../styles/pages/Messenger.css'

export default function Messenger({ socket }) {
  // set variables
  const [messagesData, setMessagesData] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  socket.on('messengerSMS', (message) => setMessagesData([...messagesData, message]));

  // helper functions
  // send new message to server
  const sendNewMessageToServer = () => {
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