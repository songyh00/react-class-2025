import './App.css';
import MyButton from './MyButton';
import CountState from './CountState';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import AboutPage from './AboutPage';

function App() {
  return (
    <div className="app">
      <h1>Welcome to my app</h1>

      <h3>default export example</h3>
      <MyButton label="I'm a button" />

      <h3>named export example</h3>
      {["Button 1", "Button 2", "Button 3"]
        .filter((label) => label !== "Button 2")
        .map((label, idx) => (
          <MyButton key={idx} label={label} />
        ))}

      <h3>wrapping example</h3>

      <h2>About</h2>
      <AboutPage />

      <h3>Displaying data</h3>
      <Profile />

      <h3>Rendering lists</h3>
      <ShoppingList />

      <h3>Updating the screen</h3>
      <CountState />
      <CountState />
      <CountState />
    </div>
  );
}

export default App;
