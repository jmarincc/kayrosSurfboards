import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "bootswatch/dist/lux/bootstrap.min.css";
import lijadora from './lijadora-pulidora.jpeg';
import logo_kayros from './logo_kayros.png';
import './App.css';
import {Link} from "react-router-dom";

import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import Registrate from "./Registrate";


const stripePromise = loadStripe("pk_test_51KhCFgJ6bLeWbu1kZmWlqQ8i9Q7yLXlqiLohUaedj3GYFXIQs5Z130udKnObvgyb20sFM88rayFPEO6rFCHQuKks005vUJR1wA");
const CheckoutForm = ()=>{
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card: elements.getElement(CardElement)
    })
    if(!error){
      console.log(paymentMethod)
    }
  }
  

  return <form onSubmit={handleSubmit} className="card card-body">
    
    <img 
      src={lijadora}
      alt="lijadora" 
      className='img-fluid'
    />    
 
    <div className='form-group'>
         <CardElement className="form-control"/>
    </div>
   
    <button className='btn btn-success'>
      Buy
    </button>
  </form>
}

function App() {

  return (
  
    <div>  
      <header>
        <hr></hr>
        <nav className="App-nav">
            <Link style={{color:'white', textDecoration: "none"}} 
             to="Registrate">Registrate</Link>
         
            <Link style={{marginLeft:'10px', color:'white', textDecoration: "none"}} 
             to="Registrate">Iniciar Sesión</Link>
         </nav>
        
         <h1>info@kayrossurfboards.com | +34 673 751 414</h1>
       </header>
      
       <img
          src={logo_kayros}
          alt="Logo Kayros" 
          className='logo'
       />
       <Routes>
          <Route path='Registrate' element={<Registrate />} />
       </Routes>
 </div>

  );
  
}


export default App;