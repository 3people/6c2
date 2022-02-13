import React, { useState } from "react";

export default function App() {
  const [order, setOrder] = useState([]);
  const [mc, setMC] = useState("");

  const shuffleArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
  };

  const makeOrder = () => {
    const people = ["이효원", "최재영", "이정규", "박제균", "이세명", "박현준"];
    let randomOrder = [];
    shuffleArray(people);
    for (let i = 0; i < people.length; i++) {
      randomOrder.push([
        people[i],
        people[(i + 1) % people.length],
        people[(i + 2) % people.length],
      ]);
    }
    setOrder(randomOrder);
  };

  const pickMC = () => {
    const people = ["이효원", "최재영", "이정규", "박제균", "이세명", "박현준"];
    shuffleArray(people);
    let mcIdx = Math.floor(Math.random() * people.length);
    setMC(people[mcIdx]);
  };
  return (
    <div className="App">
      <div>
        <ul>
          {order.map((el) => {
            return <li key={el}>{`${el[0]}: ${el[1]} ${el[2]}`}</li>;
          })}
        </ul>
        <button onClick={() => makeOrder()}>리뷰어 뽑기</button>
      </div>
      <div>
        <span>{mc}</span>
        <button onClick={() => pickMC()}>진행자 뽑기</button>
      </div>
    </div>
  );
}
