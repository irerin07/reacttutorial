import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
// useReducer((state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { value: state.value + 1 };
//     case "DECREMENT":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// });

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        The value of the Counter is <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;

// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     number: 0,
//     fixedNumber: 0
//   };
//   render() {
//     const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           //onclick을 통해 버튼을 클릭하면 호출할 함수를 지정
//           onClick={() => {
//             //this.setState를 사용하여 state에 새로운 값을 넣는다.
//             this.setState(
//               {
//                 number: number + 1
//               },
//               () => {
//                 console.log("방금 setState가 호출되었다");
//                 console.log(this.state);
//               }
//             );
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;
