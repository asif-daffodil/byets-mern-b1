import { useState, useEffect } from 'react';
import { socket } from '../socket';
import { useForm } from 'react-hook-form';


export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [time, setTime] = useState(null);
  const [returnData, setReturnData] = useState([]);
  const {register, handleSubmit, reset} = useForm();

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
    socket.on("time", (time) => {
      setTime(time);
    });
    socket.on('returnMsg', (data) => {
      setReturnData(prev => [...prev, data]);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('welcome');
      socket.off("jasonData");
      socket.off("time");
    };
  }, []);

  const onSubmit = (data) => {
    socket.emit("msg", data.msg);
    reset();
  };

  return (
    <div>
      <h1>Socket.IO + React</h1>
      <p>Connection status: {isConnected ? 'Connected' : 'Disconnected'}</p>
      <p>Server time: {time ? time.toString() : 'No time received'}</p>
      <form action="" onSubmit={handleSubmit(onSubmit)} >
        <input type="text" placeholder='Your Message' className='border px-2' {...register("msg")} />
        <button className='border px-3 cursor-pointer' type='submit'>Send</button>
      </form>
      {returnData.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
}