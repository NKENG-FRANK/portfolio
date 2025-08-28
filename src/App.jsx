import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"; // ✅ make sure this is correct
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Header /> {/* ✅ this must be here */}
      <About />
      <Portfolio />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
