import "./Card.css";

export default function Card({ name, className }) {
  return <div className={`card ${className}`}>{name}</div>;
}
