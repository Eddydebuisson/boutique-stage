import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil/Accueil'
import Register from './component/Register/Register'
import Accessoire from './pages/Accessoire';
import Ecoresponsable from './pages/Ecoresponsable';
import Enfant from './pages/Enfant';
import Panier from './pages/Panier';
import Pull from './pages/Pull';
import Tshirt from './pages/Tshirt';
import Product from './pages/Product/Product';
import ThisProduct from './component/ThisProduct/ThisProduct';

function App()
{
  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/Accessoire' element={<Accessoire />}></Route>
          <Route path='/Ecoresponsable' element={<Ecoresponsable />}></Route>
          <Route path='/Enfant' element={<Enfant />}></Route>
          <Route path='/Panier' element={<Panier />}></Route>
          <Route path='/Pull' element={<Pull />}></Route>
          <Route path='/Tshirt' element={<Tshirt />}></Route>
          <Route path='/produits' element={<Product />}></Route>
          <Route path='/produits/:name' element={<ThisProduct />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
