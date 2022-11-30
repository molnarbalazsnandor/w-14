import "./App.css";
import Pizzas from "./components/Pizzas";
/* import Beers from "./components/Beers";
import Button from "./components/Button";
import Hello from "./components/Hello";
import beersData from "./data/data"; */

function App() {
  return (
    <div className="App">
      {/*       <Button />
      <Beers data={beersData.cards} /> */}
      <Pizzas />
    </div>
  );
}

export default App;
