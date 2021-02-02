import React, {useRef} from 'react';

const WebSocketContext = React.createContext({});

function WebSocketProvider({ roomName, children }) {
  let ws = useRef(null);

  if (!ws.current && roomName) {
    const webSocketUrl = `ws://127.0.0.1:8000/ws/chat/${roomName}/`;
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onopen = () => {
      console.log("connected to " + webSocketUrl);
    }

    ws.current.onclose = error => {
      console.log("disconnect from " + webSocketUrl);
      console.log(error);
    }

    ws.current.onerror = error => {
      console.log("connection error " + webSocketUrl);
      console.log(error);
    }
  }

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketProvider
export { WebSocketContext }
