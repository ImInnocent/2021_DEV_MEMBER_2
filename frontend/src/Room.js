import './App.css';
import React, {useState, useContext} from "react";
import {Button, TextField} from "@material-ui/core";
import {WebSocketContext} from "./contexts/WebSocketContext";

function Room(props) {
  const { roomName } = props;
  const [text, setText] = useState('');
  const ws = useContext(WebSocketContext);
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([
      ...items,
      item
    ]);
  };

  ws.current.onmessage = e => {
    const data = JSON.parse(e.data);
    addItem(data.message);
  };

  const handleChangeText = e => {
    setText(e.target.value);
  }

  const handleTextKeyDown = e => {
    // handle enter
    if(e.keyCode == 13){
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    ws.current.send(JSON.stringify({
      'message': text
    }));
    setText('');
  }

  return (
    <>
      Room: {roomName}
      {items}
      <TextField
        id="chatting-text-input"
        label="Outlined"
        variant="outlined"
        value={text}
        onChange={handleChangeText}
        onKeyDown={handleTextKeyDown}
      />
      <Button onClick={handleSubmit}>
        입력
      </Button>
    </>
  );
}

export default Room;
