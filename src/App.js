import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:type/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
