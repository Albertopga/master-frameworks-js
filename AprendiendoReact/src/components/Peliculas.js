import React, { useState } from "react";
import Pelicula from "./Pelicula";

export default function Peliculas() {
  const peliculasIniciales = [
    {
      titulo: "Iron Man",
      imagen:
        "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/bf/Iron_Man_1_Portada.png/revision/latest?cb=20191029194450&path-prefix=es",
    },
    {
      titulo: "Moulin Rouge",
      imagen:
        "https://images-na.ssl-images-amazon.com/images/I/91khdPhYqmL._SY445_.jpg",
    },
    {
      titulo: "Spideman: Home comming",
      imagen:
        "https://www.cinemascomics.com/wp-content/uploads/2017/06/poster-spider-man-homecoming-espana.jpg",
    },
  ];
  const [peliculas, setPeliculas] = useState(peliculasIniciales);
  const [favorita, setFavorita] = useState({});

  const cambiarTitulo = () => {
    let pelistemp = [...peliculas];
    pelistemp[0] = { ...pelistemp[0], titulo: "Jairo mano" };
    // pelistemp[0] = { titulo:"titulo por defecto", ...pelistemp[0]  } se utilizaría para establecer parametros por defecto y añadir los que ya tengo dentro de pelistemp[0]
    setPeliculas(pelistemp);
  };

  const marcarFavorita = (peli) => {
    setFavorita(peli);
  };

  return (
    <div id="content" className="peliculas">
      <h2 className="subheader">Películas</h2>
      <p>Selección de películas favoritas</p>
      <p>
        <button onClick={cambiarTitulo}>Cambiar Titulo</button>{" "}
      </p>
      {/*Condicional simple*/}
      {/*{favorita.titulo && (*/}
      {/*  <p className="favorita">*/}
      {/*    <strong>*/}
      {/*      La película favorita es*/}
      {/*      <span>{favorita.titulo}</span>*/}
      {/*    </strong>*/}
      {/*  </p>*/}
      {/*)}*/}

      {/*Condicional if else con estructura ternaria*/}
      {favorita.titulo ? (
        <p className="favorita">
          <strong>
            La película favorita es
            <span>{favorita.titulo}</span>
          </strong>
        </p>
      ) : (
        <p>NO HAY PELICULAS FAVORITAS </p>
      )}

      <div id="articles" className="peliculas">
        <>
          {peliculas.map((pelicula, index) => {
            return (
              <Pelicula
                key={index}
                titulo={pelicula.titulo}
                imagen={pelicula.imagen}
                marcarFavorita={marcarFavorita}
              />
            );
          })}
        </>
      </div>
    </div>
  );
}
