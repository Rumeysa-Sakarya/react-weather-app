import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/148456-rumeysa-sakarya"
            target="_blank"
            rel="noreferrer"
          >
            Rumeysa Sakarya
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Rumeysa-Sakarya/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
