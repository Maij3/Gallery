import React  from 'react';
import {useState} from 'react';
import Imagenes from './componentes/Imagenes';
import { ListarImagenes } from './servicios.js';
import Banner from "./componentes/banner";
import Footer from "./componentes/footer";
function Galeria () {
  const [datos , setDatos] = useState([])

  const ListarResultados = async () => {
    const listar =  await ListarImagenes();
    const resultados  = listar.results;
    setDatos(resultados)
  }

  window.addEventListener("load", ()=>{
    ListarResultados();
  });
  return (
    <div className="contenedor">
      <div className="container-fluid">
        <Banner />
      </div>
      <div className="container">
        <Imagenes datos= {datos}  />
      </div>
      <Footer/>
    </div>
  )

}
export default Galeria
