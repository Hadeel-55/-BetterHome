
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";

import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" smooth={true} duration={100} element={<Home />}/>
      <Route path="'/About" smooth={true} duration={100} element={<About/>}/>
      <Route path="'/Service" smooth={true} duration={100} element={<Service/>}/>
      </Routes>
      <Home />
   <About/>
   
   <Service/>
    </Router>
  );
}

export default App;
