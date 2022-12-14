import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nairobi" />
        <footer>
          This React project was coded by{" "}
          <a
            href="https://cozy-palmier-cefde3.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michelle Chan {""}
          </a>
          and is{" "}
          <a
            href="https://github.com/michellechan40/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
