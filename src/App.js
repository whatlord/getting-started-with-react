import './App.css';
import GroceryList from "./GroceryList.js"

function App() {
  const groceryItems = [{item: 'water', quantity: 4},{item: 'shampoo', quantity: 3},{item: 'detergent', quantity: 1},{item: 'bagged rice', quantity: 1},{item: 'chocolate', quantity: 20}];
  return <GroceryList items={groceryItems} />
}

export default App;
