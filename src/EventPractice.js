import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;
  const onChange = e => {
    setTimeout(() => console.log(e), 500);
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="유저명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;

// import React, { Component } from "react";

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: ""
//   };

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//       //각 input 에 name 값을 부여해주었다. 이를 통하여 우리는 각 input 을 구분 할 수 있게 되었고 이 name 값은, event.target.name 을 통해서 조회 할 수 있다.
//       //onChange 이벤트가 발생하면, e.target.value 값을 통하여 이벤트 객체에 담겨있는 현재의 텍스트 값을 읽어올 수 있다.
//       //즉 위의 코드는 username: e.target.value 와 같다
//     });
//   };
//   handleClick = () => {
//     alert(this.state.username + ": " + this.state.message);
//     this.setState({
//       message: ""
//     });
//   };
//   handleKeyPress = e => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>Event EventPractice</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="User Name"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="Enter Anything"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>Confirm</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;
