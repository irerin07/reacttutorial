import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "snowman" },
    { id: 2, text: "ice" },
    { id: 3, text: "snow" },
    { id: 4, text: "wind" }
  ]);

  const [inputText, setInputText] = useState("");

  const [nextId, setNextId] = useState(5); //새로운 항목 추가할 떄 사용할 id

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId값을 id로 설정
      text: inputText
    });
    setNextId(nextId + 1); //nextId에 1을 더해준다.
    setNames(nextNames); //names 값을 업데이트.
    setInputText(""); //inputText를 비운다.
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>add</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
