import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "Banana", color: "yellow" },
    { id: 1336, name: "Apple", color: "green" },
    { id: 1335, name: "Peach", color: "coral" },
    { id: 1334, name: "Cherry", color: "red" },
    { id: 1333, name: "Coconut", color: "brown" },
  ];

  return (
    <div className="app">
      {fruits.map(({ name, id, color }) => (
        <Card key={id} name={name} className={`card--${color}`} />
      ))}
    </div>
  );
}
