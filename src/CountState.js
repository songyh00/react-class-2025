export default function CountState({ count, onClick }) {
  return (
    <button onClick={onClick} className="count-btn">
      Clicked {count} times
    </button>
  );
}
