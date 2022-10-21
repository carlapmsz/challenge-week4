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
      <footer>
        Coded by{" "}
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>{" "}
        and open-source on{" "}
        <a
          href="https://github.com/carlapmsz/challenge-week4"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
