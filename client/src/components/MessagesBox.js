// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagesBox.css'

export default function MessagesBox() {
  // set variables
  const [MessagesData, setMessagesData] = useState({});
  
  // get local storage if exists
  return (
    <div>
      <ul id="messages">
        
      </ul>
    </div>
  );
}