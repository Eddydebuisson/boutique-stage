import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil'
import Register from './component/Register/Register'

function App()
{
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
