
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";

import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}/>
      <Route path="'/About" element={<About/>}/>
      </Routes>
      <Home />
   <About/>
    </Router>
  );
}

export default App;
