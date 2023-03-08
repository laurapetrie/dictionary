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
        <Dictionary defaultKeyword="dictionary" />
        <footer className="App-footer">
          Coded by Laura Petrie. Open source code available on{" "}
          <a
            href="https://github.com/laurapetrie/dictionary"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </footer>
      </div>
    </div>
  );
}
