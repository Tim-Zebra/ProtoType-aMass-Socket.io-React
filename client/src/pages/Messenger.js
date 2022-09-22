// React 
import React, { useState, useEffect } from 'react';
import MessagesBox from '../components/MessagesBox'
import MessagingForm from '../components/MessagingForm'

// Styles
import '../styles/pages/Messenger.css'

export default function Messenger({ socket }) {
  // set variables
  // messages
  const [messagesData, setMessagesData] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  // user
  const userData = {
    name: "Dave",
    id: "007",
  }

  // sockets
  // // SMS listener - Twilio
  // socket.on('messengerSMS', (message) => setMessagesData([...messagesData, message]));
  // App Only Listener - Server
  socket.on('messengerClient', (message) => setMessagesData([...messagesData, message]));

  // helper functions
  // send new message to server
  const sendNewSMSMessageToServer = () => {
    socket.emit('messengerSMS', newMessage.text);
  }

  const sendNewAppOnlyMessageToServer = () => {
    socket.emit('messengerClient', newMessage.text);
  }

  // handles message submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessagesData([...messagesData, newMessage]);
    // sendNewSMSMessageToServer();
    sendNewAppOnlyMessageToServer();
    setNewMessage({});
  };

  // contact back end and send updated message
  return (
    <div>
      <MessagesBox messagesData={messagesData} userData={userData} />
      <MessagingForm newMessage={newMessage} setNewMessage={setNewMessage} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}