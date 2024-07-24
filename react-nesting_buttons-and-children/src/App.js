import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hallo!</Button>
      <Button>Wie gehts?</Button>
      <Button>Klick mich.</Button>
      <Button>Mich auch.</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
