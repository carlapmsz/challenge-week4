import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> Hello</h1>
          <button class="btn btn-primary">Hello</button>
          <h2>
            {" "}
            <Weather />{" "}
          </h2>
        </header>
      </div>
    </div>
  );
}

export default App;
