import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Payment = () => {
  const { month } = useParams();
  console.log(month);

  return (
    <div>
      <Elements stripe={stripePromise}></Elements>
    </div>
  );
};

export default Payment;
