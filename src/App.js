import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container"></div>
      Weather App
      <footer>
        This project was coded by{" "}
        <a
          href="https://cozy-palmier-cefde3.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Michelle Chan
        </a>
        and is{" "}
        <a
          href="https://github.com/michellechan40/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
