// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagingForm.css'

export default function MessagingForm({ userData, newMessage, setNewMessage, handleFormSubmit }) {
  return (
      <form id="form" action="" onSubmit={handleFormSubmit}>
          <input id="input" autoComplete="off" placeholder="enter message here..." value={newMessage.body} 
          onChange={(e) => {
            newMessage.body = e.target.value;
            setNewMessage(newMessage)}
            } 
            />
          <button>Send</button>
      </form>
  );
}