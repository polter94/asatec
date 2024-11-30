import "./navbar.css";
import logo from "/public/img/ASATEC-logo.png";
import { Link } from "react-router-dom";
import MenuHamburguesa from "../MenuHamburguesa/menuHamburguesa";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="div-innecesario">
          <div>
            <Link to='/'>
            <img src={logo} className="logo" alt="Logo de nuestro sitio" />
            </Link>
          </div>

          <div>
            <ul className="nav-links">

              <Link to="/categorias/shooter" className="nav-item">
                {/* <a href="">Shooters</a> */}
                <p>Inicio</p>
              </Link>

              <Link to="/categorias/aventura" className="nav-item">
                {/* <a href="">Aventura</a> */}
                <p>Nosotros</p>
              </Link>

              <Link to="/categorias/carreras" className="nav-item">
                {/* <a href="">Carreras</a> */}
                <p>Tecnicos</p>
              </Link>

              <Link to="/categorias/carreras" className="nav-item">
                {/* <a href="">Carreras</a> */}
                <p>Cursos</p>
              </Link>

              <Link to="/categorias/carreras" className="nav-item">
                {/* <a href="">Carreras</a> */}
                <p>Campus Virtual</p>
              </Link>
              
              <Link to="/categorias/carreras" className="nav-item">
                {/* <a href="">Carreras</a> */}
                <p>Noticias</p>
              </Link>

            </ul>
          </div>
        </div>

        <div>
          <MenuHamburguesa />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
