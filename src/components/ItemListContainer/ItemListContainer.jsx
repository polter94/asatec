import { useState , useEffect } from "react"
import obtenerProductos from "../../data/data"
import "./itemListContainer.css"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const itemListContainer = ( { } ) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams()

  useEffect (() => {
    obtenerProductos()
    .then ((grupo) => {
      if(idCategoria){
        const prodAgrupados = grupo.filter((producto) => producto.category === idCategoria )
        setProductos(prodAgrupados)
      }else{
        setProductos (grupo);
      }
    })
    .catch ((error) => {
      console.error(error);
    })
    .finally (() => {
      console.log("promesa prometida");
    });
  }, [idCategoria]);

  return (
    <div>
      <ItemList productos = {productos} />
    </div>
  )
}

export default itemListContainer;