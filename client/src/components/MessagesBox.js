// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagesBox.css'

export default function MessagesBox({ messagesData }) {
  return (
    <div>
      <ul id="messages">
        {messagesData.map((message, index) => <li key={index}>{message}</li>)}
      </ul>
    </div>
  );
}