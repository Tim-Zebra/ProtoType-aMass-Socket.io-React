// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagesBox.css'

export default function MessagesBox({ messagesData }) {
  return (
    <div>
      <ul id="messages">
        {messagesData.map((message, index) => {
          let body = message.body;
          let userName = message.userName;
          let date = message.date;
        <li key={index}>{body}
          <p>
            Posted by: {userName} on: {date}
          </p>
        </li>
        })}
      </ul>
    </div>
  );
}