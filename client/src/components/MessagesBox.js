// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagesBox.css'

export default function MessagesBox(messagesData) {
  // functions
  const printAllMessages = (messages) => {
    const printMessage = (message) => {
      return (
        <li>
          {message}
        </li>
      )
    }
    for(let k = 0; k < messages.length; k++) {
      let message = messages[k];
      printMessage(message);
    }
  };
  return (
    <div>
      <ul id="messages">
        {printAllMessages(messagesData)}
      </ul>
    </div>
  );
}