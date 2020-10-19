import React, { useState } from "react";

export default function SeccionPruebas() {
  const [contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <section id="content">
      <h2 className="subheader">Estado</h2>

      <p>Contador</p>
      <p>{contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>

      <section className="componentes"></section>
    </section>
  );
}
