import { useState } from "react"

const ItemCount = ({ stock, agregarCarrito }) => {
    const [count, setCount] = useState(1)
    
    const aumentar = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

    const disminuir = () => {
        if(count > 1){
            setCount(count-1)
        }
    }
    
    return (
    <div className="contador">
        <button onClick={disminuir}>-</button>
        <p>{count}</p>
        <button onClick={aumentar}>+</button>

        <button onClick={ () => agregarCarrito(count) }> Agregar al carito </button>
    </div>
    )
}

export default ItemCount