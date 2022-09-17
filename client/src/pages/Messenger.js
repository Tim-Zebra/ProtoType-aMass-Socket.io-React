// React 
import React, { useState, useEffect } from 'react';
import MessagesBox from '../components/MessagesBox'
import MessagingForm from '../components/MessagingForm'

// Styles
import '../styles/pages/Messenger.css'

export default function Messenger() {
  // set variables
  const [messagesData, setMessagesData] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('message: ', newMessage);
    setMessagesData([...messagesData, newMessage ]);
    setNewMessage('');
  };

  return (
    <div>
      <MessagesBox messagesData={messagesData} />
      <MessagingForm newMessage={newMessage} setNewMessage={setNewMessage} handleFormSubmit={handleFormSubmit}/>
    </div>
  );
}