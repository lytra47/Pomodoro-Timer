import "./CSS/App.css";
import "./CSS/responsive.css";
import Header from "./Nav/Header";
import Pomodoro from "./Components/Pomodoro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Pomodoro />
      </BrowserRouter>
    </div>
  );
}

export default App;
