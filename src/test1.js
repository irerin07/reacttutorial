const animalList = ["CAT", "DOG", "TIGER"];
const cat = animalList[0];
const dog = animalList[1];
const tiger = animalList[2];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

const [cat, dog, tiger] = ["CAT", "DOG", "TIGER"];
console.log(cat); // CAT
console.log(dog); // DOG
console.log(tiger); // TIGER

const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(num => num * num);

console.log(result);

<input
  ref={ref => {
    this.input = ref;
  }}
/>;

const numbers = [1, 2, 3, 4, 5, 6];
const biggerThanThree = numbers.filter(number => number > 3);

const numbers = [1, 2, 3, 4, 5, 6];
const withOutThree = numbers.filter(number => number !== 3);

import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default RefSample;
