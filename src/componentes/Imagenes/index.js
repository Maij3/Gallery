import React from "react";
//import _ from "lodash";
import Imagen from "./imagen";
function Imagenes({
  datos
}) {


  const Imagenes = []



  const CargarImagenes = (datos) =>{
    datos.map(item =>(
      Imagenes.push(item.image)
    ))
  }


  return (
    <div className="row">
        {
          datos !=null? (CargarImagenes(datos)):(console.log("dd"))
        }
        <Imagen Imagenes= {Imagenes} />
    </div>
  )
}
export default Imagenes
