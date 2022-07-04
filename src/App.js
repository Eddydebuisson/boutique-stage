import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil/Accueil';
import Register from './component/Register/Register';
import Product from './pages/Product/Product';

function App()
{
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/produits' element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
