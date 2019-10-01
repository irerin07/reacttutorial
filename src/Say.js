import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Welcome");
  const onClickLeave = () => setMessage("Good Bye");

  const [color, setColot] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColot("red")}>
        Red
      </button>
      <button style={{ color: "green" }} onClick={() => setColot("green")}>
        Green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColot("blue")}>
        Blue
      </button>
    </div>
  );
};

export default Say;
