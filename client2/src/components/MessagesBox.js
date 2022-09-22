// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagesBox.css'

export default function MessagesBox({ userData, messagesData }) {
  console.log('thisHappened', messagesData);
  console.log('thisHappened', userData);
  return (
      <ul id="messages">
        {messagesData.map((message, index) => {
          let body = message.body;
          let userName = message.userName;
          let date = message.date;
          let userId = message.userId;
          if(userData.userId === userId) {
            return (
              <li id="userMessage" key={index}>{body}
                <p>
                  Posted by: {userName} on: {date}
                </p>
              </li>
            );
          }
          else {
            return (
              <li id="nonUserMessages" key={index}>{body}
                <p>
                  Posted by: {userName} on: {date}
                </p>
              </li>
            );
          }
        })}
      </ul>
  );
}