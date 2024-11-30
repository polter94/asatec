import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemdetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter>

    <CartProvider>
    <Navbar />

    <Routes>
      <Route path="/" element={<ItemListContainer saludo="Saludos, esta en el inicio"/>} />
      <Route path="/categorias/:idCategoria" element={ <ItemListContainer saludo={" se ingreso a la ruta: "}/> } />
      <Route path="/detalle/:id" element={ <ItemdetailContainer saludo={" se ingreso al detalle de un item"} /> } />
    </Routes>
    </CartProvider>

    </BrowserRouter>
  )
}

export default App;