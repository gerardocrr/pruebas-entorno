import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useState(() => {
    console.log(import.meta.env.VITE_SOME_KEY);
  }, []);

  return (
    <div>
      <div>{import.meta.env.VITE_SOME_KEY}</div>
      <div>{import.meta.env.VITE_DB_PASSWORD}</div>
    </div>
  );
}

export default App;
