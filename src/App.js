import "./CSS/App.css";
import "./CSS/responsive.css";
import Navbar from "./Nav/Navbar";
import Pomodoro from "./Components/Pomodoro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Pomodoro />
      </BrowserRouter>
    </div>
  );
}

export default App;
