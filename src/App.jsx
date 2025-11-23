
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";


import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Header" element={<Header />}></Route>
      
      </Routes>
      <Header />
   
    </Router>
  );
}

export default App;
