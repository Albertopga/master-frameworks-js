import React from "react";
import Slider from "../Slider";
import Sidebar from "../Sidebar";
import Articles from "../Articles";

const Home = () => {
  return (
    <div id="home">
      <Slider
        title="Bienvenido a la Home"
        textButton="Ir al Blog"
        navTo="/blog"
      />
      <div className="center">
        <div id="content">
          <h1 className="subheader">Últimos artículos</h1>
          <Articles home="true" />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
