import { Link } from "react-router-dom"
import { useState } from "react";

const Item = ( { producto } ) => {
    const [expandir, setExpandir] = useState(false)

    const handleMouseOver = () => {
        setExpandir(true)
    }

    const handleMouseAway = () => {
        setExpandir(false)
    }

    const cardStyle = {
        transform: expandir ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease-in-out',
    }

    return (
        <Link to={'/detalle/'+producto.id}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseAway}
        style={cardStyle}
        className={expandir ? "cardExpandida" : "card"}
        >

            <div className="cardS" >
            <img src={producto.cover} alt="" />
            <p>{producto.title}</p>
            <p>{producto.price}</p>
            </div>
        </Link>
    )
}

export default Item