import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Accueil/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
