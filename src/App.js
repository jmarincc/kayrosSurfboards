import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "bootswatch/dist/lux/bootstrap.min.css";
import lijadora from './lijadora-pulidora.jpeg';
import logo_kayros from './logo_kayros.png';
import './App.css';

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
          <h1>info@kayrossurfboards.com | +34 673 751 414</h1>
       </header>
    
    <img
      src={logo_kayros}
      alt="Logo Kayros" 
      className='logo'
    /> 
    <hr />
    <Elements stripe={stripePromise}>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-4 offset-md-4'>
            <CheckoutForm/>
          </div>
        </div>
      </div>
    </Elements>
    </div>
  );
}

export default App;