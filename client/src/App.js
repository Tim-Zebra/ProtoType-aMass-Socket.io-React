import React, { useState, useEffect } from 'react';
import Messenger from "./pages/Messenger";

import io from 'socket.io-client';

const socket = io();

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return (
    <div>
      <p>Connected: { '' + isConnected }</p>
      <Messenger socket={socket}/>
    </div>

  );
}

export default App;
