import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  // function countDown() {
  // setCount(count - 1);
  // }

  // function countUp() {
  //  setCount(count + 1);
  // }

  function handleCount(change) {
    setCount(count + change);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleCount(-1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            handleCount(1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
