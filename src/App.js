import React, { Component } from "react"; // React를 불러와서 사용할 수 있게 해준다
// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
// import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          To the Bottom
        </button>
      </div>
    );
  }
}
export default App;
