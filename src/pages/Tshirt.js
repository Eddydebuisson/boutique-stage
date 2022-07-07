import './Tshirt.css';
import Nav from "../component/Nav/Nav";
import Footer from "../component/Footer/Footer";
import lotus from  '../assets/lotus.png'
import Products from '../component/Products/Products';
const Tshirt = () =>
{

  return (
    <div>
      <Nav />
      <div className='tshirt'>
      <img src={lotus}/>
      <h1>T-shirt</h1>
      <img src={lotus}/>
      </div>
      <Products/>
      <Footer />
    </div>

  )

};

export default Tshirt;

