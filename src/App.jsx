import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{import.meta.env.VITE_SOME_KEY}</div>
      <div>{import.meta.env.VITE_DB_PASSWORD}</div>
    </div>
  );
}

export default App;
