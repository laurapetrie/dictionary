import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <Dictionary />
        <footer className="App-footer">
          Open-source code by{" "}
          <a
            href="https://github.com/laurapetrie/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Laura Petrie
          </a>
        </footer>
      </div>
    </div>
  );
}
