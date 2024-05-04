import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div>{import.meta.env.SOME_KEY}</div>
      <div>{import.meta.env.DB_PASSWORD}</div>
    </div>
  );
}

export default App;
