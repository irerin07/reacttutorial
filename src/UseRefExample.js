import React, { useRef } from "react";

const UseRefExample = () => {
  const id = useRef(1);
  const setId = n => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refsample</div>;
};

export default UseRefExample;
