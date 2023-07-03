import "./CSS/App.css";
import "./CSS/responsive.css";
import Header from "./Nav/Header";
import Pomodoro from "./Components/Pomodoro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";
import Notes from "./Components/Notes";
import Home from "./Components/Home";
import TaskMaster from "./Components/TaskMaster";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/taskmaster" element={<TaskMaster />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
