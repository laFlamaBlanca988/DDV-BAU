import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Gallery from "./containers/Gallery";
import Footer from "./containers/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </Router>
  );
}

export default App;
