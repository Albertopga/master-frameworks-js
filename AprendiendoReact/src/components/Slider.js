import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Slider = (props) => {
  const { title, textButton, navTo } = props;
  let size = !navTo ? "slider-small" : "slider-big";

  return (
    <div id="slider" className={size}>
      <h1>{title}</h1>
      {textButton && navTo && (
        <NavLink to={navTo} className="btn-white">
          {textButton}
        </NavLink>
      )}
    </div>
  );
};

export default Slider;
