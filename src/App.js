import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
