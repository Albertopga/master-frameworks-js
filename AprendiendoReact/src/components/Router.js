import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeccionPruebas from "./SeccionPruebas";
import Error from "./Error";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Peliculas from "./Peliculas";
import Formulario from "./Formulario";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="center">
        {/* CONFIGURAR RUTAS Y PÁGINAS */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />

          {/*Recoger parametros de una url.
        si se pone :parametro? el interrogante indica que es opcional*/}
          <Route
            exact
            path="/prueba-1/:nombre/:apellido?"
            render={(props) => {
              let printDates;
              const { nombre, apellido } = props.match.params;

              if (nombre && apellido) {
                printDates = nombre + " " + apellido;
              } else {
                printDates = nombre;
              }
              return (
                <div className="content">
                  <h1 className="subheader"> Hola mundo</h1>
                  <h2>{printDates}</h2>
                </div>
              );
            }}
          />

          {/*Ruta para que si la url no existe cargue pag de error
        Esta ruta tiene que ser la última*/}
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
