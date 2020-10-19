import React from "react";
import Slider from "./Slider";
import Articles from "./Articles";
import Sidebar from "./Sidebar";

const Buscador = (props) => {
  const searched = props.match.params.search;

  return (
    <div id="blog">
      <Slider title={"Busqueda: " + searched} />
      <div className="center">
        <div id="content">
          {/*listado de artículos que vendrán de la api rest de node*/}
          <Articles search={searched} />
        </div>
      </div>
      <Sidebar blog="true" />
    </div>
  );
};

export default Buscador;
