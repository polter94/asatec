import "./navbar.css";
import logo from "/public/img/ASATEC-logo.png";
import { Link } from "react-router-dom";
import MenuHamburguesa from "../MenuHamburguesa/menuHamburguesa";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
          <div>
            <Link to='/'>
            <img src={logo} className="logo" alt="Logo de nuestro sitio" />
            </Link>
          </div>

          <div>
            <ul className="nav-links">

              <Link to="/pages/inicio" className="nav-item">
                <p>Inicio</p>
              </Link>

              <Link to="/pages/nosotros" className="nav-item">
                <p>Nosotros</p>
              </Link>

              <Link to="/pages/tecnicos" className="nav-item">
                <p>Tecnicos</p>
              </Link>

              <Link to="/pages/cursos" className="nav-item">
                <p>Cursos</p>
              </Link>

              <Link to="/pages/campusVirtual" className="nav-item">
                <p>Campus Virtual</p>
              </Link>
              
              <Link to="/pages/noticias" className="nav-item">
                <p>Noticias</p>
              </Link>

            </ul>
          </div>

          <div>
            <MenuHamburguesa />
          </div>

      </nav>
    </div>
  );
}

export default Navbar;
