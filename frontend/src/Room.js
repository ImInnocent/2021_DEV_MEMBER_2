import './App.css';
import React, {useState} from "react";
import {TextField} from "@material-ui/core";

function Room(props) {
  const { roomName } = props;

  return (
    <>
      Room: {roomName}
    </>
  );
}

export default Room;
