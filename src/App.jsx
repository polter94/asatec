import Navbar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nosotros from "./components/Pages/Nosotros";
import Tecnicos from "./components/Pages/Tecnicos";
import Cursos from "./components/Pages/Cursos";
import CampusVirtual from "./components/Pages/CampusVirtual";
import Noticias from "./components/Pages/Noticias";
import Inicio from "./components/Pages/Inicio";

function App() {

  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />}/>
        
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/campusVirtual" element={<CampusVirtual />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>


    </Router>
  )
}

export default App;