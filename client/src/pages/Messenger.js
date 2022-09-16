// React 
import React, { useState, useEffect } from 'react';
import MessagesBox from '../components/MessagesBox'
import MessagingForm from '../components/MessagingForm'

// Styles
import '../styles/pages/Messenger.css'

export default function Messenger() {
  // set variables
  const [MessagesData, setMessagesData] = useState([]);

  const handleFormSubmit = (event) => {
    const { name, value } = event.target;
    setMessagesData({ ...MessagesData, [name]: value });
  };

  return (
    <div>
      <MessagesBox messagesData={MessagesData} />
      <MessagingForm onSubmit={handleFormSubmit}/>
    </div>
  );
}