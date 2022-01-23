import React from "react";
import img from "./img/banner.jpg";
import "./banner.css";
import name from "./img/name.png";
const Banner= () => {
  return(
    <div className="banner">
      <img className ="img-banner" src={img} alt="" />
      <img className ="name-banner" src={name} alt="" />
    </div>
  )
}

export default Banner
