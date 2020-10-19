import React from "react";
import { Link } from "react-router-dom";

const Pelicula = ({ titulo, imagen, marcarFavorita }) => {
  const marcar = () => {
    marcarFavorita({ titulo, imagen });
  };

  return (
    <article className="article-item" id="article-template">
      <div className="image-wrap">
        <img src={imagen} alt={titulo} />
      </div>

      <h2>{titulo}</h2>
      <span className="date">Hace 5 minutos</span>
      <Link to="#">Leer más</Link>
      <button onClick={marcar}>Marcar Como favorita</button>
      <div className="clearfix"></div>
    </article>
  );
};

export default Pelicula;
