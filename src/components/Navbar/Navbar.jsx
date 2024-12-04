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

              <Link to="/" className="nav-item">
                <p>Inicio</p>
              </Link>

              <Link to="/nosotros" className="nav-item">
                <p>Nosotros</p>
              </Link>

              <Link to="/tecnicos" className="nav-item">
                <p>Tecnicos</p>
              </Link>

              <Link to="/cursos" className="nav-item">
                <p>Cursos</p>
              </Link>

              <Link to="/campusVirtual" className="nav-item">
                <p>Campus Virtual</p>
              </Link>
              
              <Link to="/noticias" className="nav-item">
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