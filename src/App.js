import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';


const stripePromise = loadStripe("pk_test_51KhCFgJ6bLeWbu1kZmWlqQ8i9Q7yLXlqiLohUaedj3GYFXIQs5Z130udKnObvgyb20sFM88rayFPEO6rFCHQuKks005vUJR1wA");
const CheckoutForm = ()=>{
  return <form>
    <CardElement/>
  </form>
}
function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
  );
}

export default App;