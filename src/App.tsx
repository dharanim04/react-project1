import Item from './components/Items'

import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>shopping</h1>
      <Item name='Laptop' price ={100000} />
      <Item name='Pendrive' price ={4000} />
      <Item name='Mobile' price ={35000} /> 
      <Cart />
    </div>
  );
}

export default App;
