import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const Payment = () => {
  const { month } = useParams();

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm month={month}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
