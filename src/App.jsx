import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  const username = "John Doe";
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;