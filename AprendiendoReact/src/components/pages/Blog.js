import React from "react";
import Slider from "../Slider";
import Sidebar from "../Sidebar";

const Blog = () => {
  return (
    <div id="blog">
      <Slider title="Bienvenido al Blog" />
      <div className="center">
        <div id="content">
          {/*listado de artículos que vendrán de la api rest de node*/}
        </div>
      </div>
      <Sidebar blog="true" />
    </div>
  );
};

export default Blog;
