// React 
import React, { useState, useEffect } from 'react';
import MessagesBox from '../components/MessagesBox'
import MessagingForm from '../components/MessagingForm'

// Styles
import '../styles/pages/Messenger.css'

const defaultNewMessage = {
  userName: undefined,
  userId: undefined,
  body: undefined,
  date: undefined,
}

export default function Messenger({ socket }) {
  // set variables
  // messages
  const [messagesData, setMessagesData] = useState([]);
  const [newMessage, setNewMessage] = useState(defaultNewMessage);
  // user
  const userData = {
    userName: "Dave",
    userId: "007",
  }

  // sockets
  // // SMS listener - Twilio
  // socket.on('messengerSMS', (message) => setMessagesData([...messagesData, message]));
  // App Only Listener - Server
  socket.on('messengerClient', (message) => setMessagesData([...messagesData, message]));

  // helper functions
  // send new message to server to POST to Twilio SMS
  const sendNewSMSMessageToServer = () => {
    socket.emit('messengerSMS', newMessage.body);
  }

  // send new message to server to POST to Client Web Chat
  const sendNewAppOnlyMessageToServer = () => {
    socket.emit('messengerClient', newMessage.body);
  }
  
  // process message object
  const processNewMessage = () => {
    newMessage.userName = userData.userName;
    newMessage.userId = userData.userId;
    newMessage.date = Date.now();
  } 
  // handles message submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    processNewMessage();
    setMessagesData([...messagesData, newMessage]);
    // sendNewSMSMessageToServer();
    // sendNewAppOnlyMessageToServer();
    setNewMessage(defaultNewMessage);
  };

  // contact back end and send updated message
  return (
    <div>
      <MessagesBox messagesData={messagesData} userData={userData} />
      <MessagingForm userData={userData} newMessage={newMessage} setNewMessage={setNewMessage} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}