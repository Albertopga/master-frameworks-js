import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Sidebar(props) {
  const { blog } = props;
  const searchRef = React.createRef();
  const [search, setSearch] = useState(null);

  const redirectToSearch = (eve) => {
    eve.preventDefault();
    setSearch(searchRef.current.value);
  };

  if (search) {
    return <Redirect to={"/redirect/" + search} />;
  }

  return (
    <aside id="sidebar">
      {blog && (
        <div id="nav-blog" className="sidebar-item">
          <h3>Puedes hacer esto</h3>
          <Link to={"blog/crear"} className="btn btn-success">
            Crear artículo
          </Link>
        </div>
      )}

      <div id="search" className="sidebar-item">
        <h3>Buscador</h3>
        <p>Encuentra el artículo que buscas</p>
        <form onSubmit={redirectToSearch}>
          <input type="text" name="search" ref={searchRef} />
          <input type="submit" name="submit" value="Buscar" className="btn" />
        </form>
      </div>
    </aside>
  );
}
