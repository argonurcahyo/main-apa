import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from "./components/Home";
import Header from "./components/Header";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/page/:page" element={<Home />} />
        <Route exact path="/game/:id" element={<GameDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
