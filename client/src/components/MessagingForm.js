// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagingForm.css'

export default function MessagingForm({ handleFormSubmit }) {
  return (
      <form id="form" action="" onSubmit={handleFormSubmit}>
          <input id="input" autoComplete="off" />
          <button>Send</button>
      </form>
  );
}