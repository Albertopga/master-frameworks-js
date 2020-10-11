import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Peliculas from "./components/Peliculas";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <Peliculas />
        <Sidebar />
      </div>
      <div className="clearfix" />
      <Footer />
    </div>
  );
}

export default App;
