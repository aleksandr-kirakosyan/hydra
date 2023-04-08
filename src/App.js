import React from "react";
import './App.css'
import Copyright from "./components/copyright/Copyright";
import Navbar from "./components/navbar/Navbar";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Footer from "./containers/footer/Footer";
import Howto from "./containers/howto/Howto";
import Services from "./containers/services/Services";
import Technologies from "./containers/technologies/Technologies";
import Why from "./containers/why/Why";

function App() {
  return (
    <div>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navbar />
      <About />
      <Services />
      <Why />
      <Technologies />
      <Howto />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
