import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import useAgreement from '../../../../hooks/useAgreement';
import { RiCoupon5Line } from 'react-icons/ri';
import useCoupon from '../../../../hooks/useCoupon';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loading from '../../../../assets/loading.json';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CheckOutForm = ({ month }) => {
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [refetch, agreement, isLoading] = useAgreement();
  const [price, setPrice] = useState(null);
  const [savedPrice, setSavedPrice] = useState(0);

  const stripe = useStripe();
  const elements = useElements();
  const [, coupons] = useCoupon();
  let couponCode = [];

  coupons.map(coupon => couponCode.push(coupon.coupon_code));
  // console.log(couponCode);

  const handleCoupon = value => {
    if (couponCode.includes(value)) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const handleApplyCoupon = e => {
    e.preventDefault();
    const couponCode = e.target.code.value;
    const couponPercentage = coupons.find(
      coupon => coupon.coupon_code === couponCode
    );
    const discount = couponPercentage.discount_percentage;
    setSavedPrice((agreement.rent * discount) / 100);
    setPrice(agreement.rent - (agreement.rent * discount) / 100);
  };

  useEffect(() => {
    if (agreement.rent) {
      setPrice(agreement.rent);
      // console.log(agreement.rent);
    }
  }, [agreement, axiosSecure]);

  useEffect(() => {
    if (price) {
      axiosSecure
        .post('/create-payment-intent', { price })
        .then(res => setClientSecret(res.data.clientSecret));
    }
  }, [price, axiosSecure]);

  const handlePaymentCheckout = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      toast.error(`${error.message}`);
    } else {
      console.log(paymentMethod);
    }

    const { paymentIntent, error: err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: 'fffffff',
            email: agreement.email,
          },
        },
      }
    );
    if (err) {
      console.log('confrim error', err);
    } else {
      if (paymentIntent) {
        const payment = {
          name: agreement.user_name,
          email: agreement.email,
          rent: price,
          transactionID: paymentIntent.id,
          month,
          paymentDate: new Date(),
          apartmentDetails: {
            floor: agreement.floor,
            apartment: agreement.apartment_no,
            block: agreement.block_name,
          },
        };
        axiosSecure.post('/payments', payment).then(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your payment have been successfully completed',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.data);
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Lottie
          className="h-[200px] w-[200px]"
          animationData={loading}
        ></Lottie>
      </div>
    );
  }

  return (
    <div className="max-w-2xl  mx-auto py-24">
      <div className="bg-white rounded-xl">
        <div className="pt-10">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow p-5 card rounded-box">
              <h3>Rent: ${agreement.rent}</h3>
              <h3>
                Discount: $
                {price === null ? <p>Loading price..</p> : savedPrice}
              </h3>
              {price > 0 && <p>Total Price: ${price}</p>}
            </div>
            <div className="divider lg:divider-horizontal"></div>

            <div className="relative grid flex-grow p-5 card rounded-box place-items-center">
              <RiCoupon5Line className="absolute -left-2 text-7xl text-[#DCDFE6]" />
              <form
                onSubmit={handleApplyCoupon}
                className="w-full max-w-[70%] mx-auto space-y-1 dark:text-gray-800 "
              >
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 pb-2"
                >
                  Have any coupons?
                </label>
                <div className="flex">
                  <input
                    onChange={e => handleCoupon(e.target.value)}
                    type="text"
                    name="code"
                    placeholder="Type your coupon code"
                    className="flex flex-1 border sm:text-sm rounded-l-md p-3"
                  />
                  <button
                    className="flex btn rounded-l-none items-center px-3 sm:text-sm rounded-r-md bg-[#CD8C66] hover:bg-[#d37c4a]"
                    disabled={btnDisable}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <form onSubmit={handlePaymentCheckout} className=" p-10">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button
            className="btn btn-block mt-6 bg-[#CD8C66]"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
