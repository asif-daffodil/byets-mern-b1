import { useState, useEffect } from 'react';
import { socket } from '../socket';


export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }


    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('welcome', (message) => {
      console.log(message);
    });
    socket.on("jasonData", (data) => {
      console.log(data);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('welcome');
      socket.off("jasonData");
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO + React</h1>
      <p>Connection status: {isConnected ? 'Connected' : 'Disconnected'}</p>
    </div>
  );
}