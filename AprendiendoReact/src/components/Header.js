import React from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="center">
        <div id="logo">
          <img src={logo} className="app-logo" alt="Logotipo" />
          <span id="brand">
            <strong> Curso</strong>React
          </span>
        </div>

        <nav id="menu">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/formulario">Formulario</NavLink>
            </li>
            <li>
              <NavLink to="/peliculas">Películas</NavLink>
            </li>
          </ul>
        </nav>
        <div className="clearfix"></div>
      </div>
    </header>
  );
};
export default Header;
