import React, {useState} from "react";
import "./menuHamburguesa.css";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}

            </div>
            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#cursos">Cursos</a></li>
                    <li><a href="#convenios">Convenios</a></li>
                    <li><a href="#delegaciones">Delegaciones</a></li>
                    <li><a href="#asociados">Asociados</a></li>
                    <li><a href="#campusVirtual">Campus Virtual</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuHamburguesa