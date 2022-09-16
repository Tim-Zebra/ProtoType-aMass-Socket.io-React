// React
import React, { useState, useEffect } from 'react';

// Styles
import '../styles/components/MessagingForm.css'

export default function MessagingForm() {
  return (
    <div>
      <form id="form" action="">
          <input id="input" autocomplete="off" /><button>Send</button>
      </form>
    </div>
  );
}