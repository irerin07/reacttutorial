import React from "react";

const IterationSample = () => {
  const names = ["snowman", "ice", "snow", "wind"];
  const nameList = names.map(name => <li>{name}</li>);
  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
