import "./App.css";
import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Gallery from "./containers/Gallery";
import Footer from "./containers/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
