import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={3} valueB={5} />
      <Sum valueA={5} valueB={2} />
      <Sum valueA={4} valueB={5} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      <p>{valueA + valueB}</p>
    </div>
  );
}
