import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Johann" />
      <Greeting name="Andrea" isCoach />
      <Greeting name="Felix" isCoach />
    </div>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <div>
      <h1>
        Hello, {isCoach && "Coach"} {!isCoach && name}!
      </h1>
    </div>
  );
}
