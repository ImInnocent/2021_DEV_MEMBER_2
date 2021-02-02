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

function App() {
  const [roomName, setRoomName] = useState('');

  const handleChange = e => {
    setRoomName(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path={`/:roomName`}>
              <Room roomName={roomName} />
            </Route>
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
                <Button variant="contained" color="primary">
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
