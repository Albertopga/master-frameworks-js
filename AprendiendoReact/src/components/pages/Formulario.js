import React, { useState } from "react";
import Sidebar from "../Sidebar";

const Formulario = () => {
  let genero;
  const nombreRef = React.createRef();
  const apellidosRef = React.createRef();
  const bioRef = React.createRef();
  const hombreRef = React.createRef();
  const mujerRef = React.createRef();
  const otroRef = React.createRef();

  const [user, setUser] = useState({});

  const recibirFormulario = (event) => {
    event.preventDefault();
    if (hombreRef.current.checked) {
      genero = hombreRef.current.value;
    } else if (mujerRef.current.checked) {
      genero = mujerRef.current.value;
    } else if (otroRef.current.checked) {
      genero = otroRef.current.value;
    }
    let tempUser = {
      nombre: nombreRef.current.value,
      apellidos: apellidosRef.current.value,
      bio: bioRef.current.value,
      genero: genero,
    };
    setUser(tempUser);
  };

  return (
    <div id="formulario">
      <div className="center">
        <div id="content">
          <h1 className="subheader">Formulario</h1>
          {user.nombre && (
            <section id="userData">
              <p>
                Nombre: <strong>{user.nombre}</strong>
              </p>
              <p>
                Apellidos: <strong>{user.apellidos}</strong>
              </p>
              <p>
                Genero: <strong>{user.genero}</strong>
              </p>
            </section>
          )}
          <form
            className="mid-form"
            onSubmit={recibirFormulario}
            onChange={recibirFormulario}
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" ref={nombreRef} />
            </div>

            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" name="apellidos" ref={apellidosRef} />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Biografia</label>
              <textarea name="bio" ref={bioRef}></textarea>
            </div>

            <div className="form-group radibuttons">
              <input
                type="radio"
                name="genero"
                value="hombre"
                ref={hombreRef}
              />{" "}
              Hombre
              <input
                type="radio"
                name="genero"
                value="mujer"
                ref={mujerRef}
              />{" "}
              Mujer
              <input
                type="radio"
                name="genero"
                value="otro"
                ref={otroRef}
              />{" "}
              Otro
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Enviar" className="btn btn-success" />
          </form>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Formulario;
