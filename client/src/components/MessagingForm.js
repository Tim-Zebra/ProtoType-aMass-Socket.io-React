// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagingForm.css'

export default function MessagingForm({ userData, newMessage, setNewMessage, handleFormSubmit }) {
  return (
      <form id="form" action="" onSubmit={handleFormSubmit}>
          <input id="input" autoComplete="off" placeholder="enter message here..." value={newMessage.body} onChange={(e) => setNewMessage(e.target.value)} />
          <button>Send</button>
      </form>
  );
}