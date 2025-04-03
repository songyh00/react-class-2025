import './ShoppingList.css';

export default function ShoppingList() {
  const items = [
    { name: "Cabbage", color: "red" },
    { name: "Garlic", color: "green" },
    { name: "Apple", color: "blue" }
  ];

  return (
    <ul className="shopping-list">
      {items.map((item, index) => (
        <li
          key={index}
          className={`color-${item.color}`}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
