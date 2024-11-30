import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( { producto } ) => {
    const agregarCarrito = (count) => {
        const productoCarrito = {...producto, cantidad: count}

        console.log(productoCarrito)
        //proximamente esto sera utilizado para popular el carrito
    }

    return (
        <div className="cardDetail">
            <div>
                <img src={producto.cover} alt="" />
                <p>{producto.title}</p>
                <p>{producto.price}</p>
            </div>
            <div>
                <p>{producto.desc}</p>
                <ItemCount stock={producto.stock} agregarCarrito={agregarCarrito}/>
            </div>
        </div>
    )
}

export default ItemDetail