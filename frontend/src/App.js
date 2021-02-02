import './App.css';
import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Room from "./Room";
import WebSocketContext from "./contexts/WebSocketContext";

function App() {
  const [roomName, setRoomName] = useState('');
  const [active, setActive] = useState(false);

  const handleChange = e => {
    setRoomName(e.target.value);
  }

  const handleEnter = () => {
    setActive(true);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            {/* chatting room */}
            <Route path={`/:roomName`}>
              <WebSocketContext active={active} roomName={roomName}>
                <Room roomName={roomName} />
              </WebSocketContext>
            </Route>
            {/* index */}
            <Route path="/">
              What chat room would you like to enter?<br />
              <TextField
                id="room-name-input"
                label="Outlined"
                variant="outlined"
                value={roomName}
                onChange={handleChange}
              />
              <br />
              <Link to={`/${roomName}`}>
                <Button onClick={handleEnter} variant="contained" color="primary">
                  접속하기
                </Button>
              </Link>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
