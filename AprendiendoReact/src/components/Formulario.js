import React from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Peliculas from "./Peliculas";

const Formulario = () => {
  return (
    <div id="formulario">
      <Slider title="Bienvenido al Formulario" />
      <div className="center">
        <div id="content"></div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Formulario;
