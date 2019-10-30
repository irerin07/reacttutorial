import React, { useState } from "react"; // React를 불러와서 사용할 수 있게 해준다
// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./ScrollBox";
// import IterationSample from "./IterationSample";
// import CounterHooks from "./Counter_hooks";
import Info from "./Info.js";

// class App extends Component {
//   render() {
//     return <CounterHooks />;
//   }
// }

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};
export default App;
