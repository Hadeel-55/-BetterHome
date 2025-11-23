
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";


import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}/>
      
      </Routes>
      <Home />
   
    </Router>
  );
}

export default App;
