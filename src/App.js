import React from "react"; // React를 불러와서 사용할 수 있게 해준다
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name="김리액트씨" favoriteNumber={219}>
      리액트
    </MyComponent>
  );
};

export default App;
