import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jó napot kutya, hallottam híred, gyere má' ide, oszt csavarintok egyet
          rajtad, papíron erősebb vagyok, odacsaplak mingyá, oszt eszek majd egy
          nagyot
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
