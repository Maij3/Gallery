import React from "react"
import _ from "lodash";
import uniqid from 'uniqid';
import "../imagenes.css";

const Imagen = ({
  Imagenes
}) => {

  const img = _.chunk(Imagenes, 2)
  //console.log(img)
  //for(let i=0 ; i<img.length ; i++){
  //for(let j=0 ; j<img[j].length ; j++){
  //console.log(img[j][j])
  //}
  //}
  //img.map((item, key) => {
    //console.log(item[0])
  //})

  return (
    img.map((item, index) => (
      <div  key ={uniqid()}className="column">
        <img  src={item[0]} alt="" /> 
        <img  src={item[1]} alt="" />
      </div>
    ))
  )
}
export default Imagen
