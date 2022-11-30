import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './Checkoutform';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const bookProds = useLoaderData()
    const navigation = useNavigation();
    const {dressId,img,price,productName} =bookProds
    if(navigation.state === "loading"){
        return <button className="btn loading">loading</button>
    }
    return (
        <div>
            <p>payment for {productName}</p>
            <p> plece pay {price}$ for buy  {bookProds.productName}</p>
            <div className='card card-compact w-96 bg-base-100 shadow-xl my-10 p-10 '>
            <Elements stripe={stripePromise}>
      <CheckoutForm bookProds={bookProds}/>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;