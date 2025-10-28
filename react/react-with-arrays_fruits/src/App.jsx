import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 Banana", color: "yellow" },
    { id: 1, name: "🍎 Apple", color: "red" },
    { id: 2, name: "🍊 Orange", color: "orange" },
    { id: 3, name: "🥝 Kiwi", color: "brown" },
    { id: 4, name: "🥭 Mango", color: "yellow" },
  ];

  const fruitItems = fruits.map((fruit) => (
    <Card 
      key={fruit.id} 
      name={fruit.name} 
      color={fruit.color} 
    />
  ));

  return (
    <div className="app">
      {fruitItems}
    </div>
  );
}