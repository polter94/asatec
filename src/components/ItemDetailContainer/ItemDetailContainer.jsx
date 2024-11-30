import { useState, useEffect } from "react";
import obtenerProductos from "../../data/data";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css"

const ItemdetailContainer = () => {
    const [producto, setProductos] = useState({});
    const { id } = useParams()
    
    useEffect( () => {

        obtenerProductos()
        .then((data) => {
            const productoSolicitado = data.find ((productoID) => productoID.id === id )
            setProductos(productoSolicitado)
        })
    }, [])

    return( <ItemDetail producto={producto} /> )
}

export default ItemdetailContainer