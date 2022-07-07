import './Enfant.css';
import Nav from "../component/Nav/Nav";
import Footer from "../component/Footer/Footer";
import lotus from  '../assets/lotus.png'
import Products from '../component/Products/Products';
const Enfant = () =>
{

  return (
    <div>
      <Nav />
      <div className='enfant'>
      <img src={lotus}/>
      <h1>Enfant</h1>
      <img src={lotus}/>
      </div>
      <Products/>
      <Footer />
    </div>

  )

};

export default Enfant;

