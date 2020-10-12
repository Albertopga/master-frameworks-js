import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeccionPruebas from "./SeccionPruebas";
import Peliculas from "./Peliculas";

const Router = () => {
  return (
    <BrowserRouter>
      {/* CONFIGURAR RUTAS Y PÁGINAS */}
      <Switch>
        <Route path="/prueba" component={SeccionPruebas} />
        <Route path="/" component={Peliculas} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
