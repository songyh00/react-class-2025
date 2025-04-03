export default function MyButton({ label }) {
  const handleClick = () => {
    if (label === "I'm a button") {
      alert("Hello");
    }
  };

  return <button onClick={handleClick}>{label}</button>;
}
