
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Footer from "./footer.jsx";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" smooth={true} duration={100} element={<Home />}/>
      <Route path="'/About" smooth={true} duration={100} element={<About/>}/>
      <Route path="'/Service" smooth={true} duration={100} element={<Service/>}/>
      <Route path="'/Contact" smooth={true} duration={100} element={<Contact/>}/>
      <Route path="'/Footer" smooth={true} duration={100} element={<Footer/>}/>
      </Routes>
      <Home />
   <About/>
   
   <Service/>
   <Contact/>
   <Footer/>
    </Router>
  );
}

export default App;
