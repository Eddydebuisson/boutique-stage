import Nav from "../component/Nav/Nav";
import Footer from "../component/Footer/Footer";
import './Accessoire.css';
import lotus from '../assets/lotus.png'
import Products from "../component/Products/Products";


const Accessoire = () =>
{

  return (
    <div>
      <Nav />
      <div className='accessoire'>
      <img src={lotus}/>
      <h1>Accessoire</h1>
      <img src={lotus}/>
      </div>
      <Products/>
      <Footer />
    </div>

  )

};

export default Accessoire;

