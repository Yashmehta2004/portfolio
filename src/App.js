import React from "react";
import "./App.css";
import "./heros.css";
import Portfolio from "./portfolio"; 
import Hero from "./hero";
import About from "./about";
import Experience from "./experience";
import Footer from "./footer";
function App() {
  return (
    <>
    <div className="sec">
      <Portfolio/>
      <Hero/>
      <About/>
      <Experience/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
