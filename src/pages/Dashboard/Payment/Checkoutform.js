import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({bookProds}) => {
 const {price,byerName,email,_id,dressId}=bookProds
const [cardError,setCardError]=useState('')
const [clientSecret, setClientSecret] = useState("");
const [succes,setSucces]=useState('')
const [transId,setTransId]=useState('')
const [process,setProcess]=useState(false)
const stripe =useStripe()
const elements = useElements();


// recive payment data form server
useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://y-five-cyan.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
         "Content-Type": "application/json" 
        },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);


// submit handler
    const handleSubmit=async(event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
          return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('error', error);
            setCardError(error.message)
          }
           else {
            setCardError('')
          }


          setSucces('')
          setProcess(true)
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:byerName,
                  email:email
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          if(paymentIntent.status==="succeeded"){
            
            const paymentInfo = {
                email,
                price,
                transId:paymentIntent.id,
                bookingId:_id,
                dressMainId:dressId

            }
            fetch(`https://y-five-cyan.vercel.app/paidProduct`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(paymentInfo)
            })
            .then(res=>res.json())           
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    
                    setSucces('Your payment complet')
            setTransId(paymentIntent.id);
                }
            })
          }
          setProcess(false)

    }
    return (
       <>
        <form onSubmit={handleSubmit}>
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
        className='btn btn-sm btn-primary mt-5'
         type="submit"
         disabled={!stripe || !clientSecret || process}>
          Pay
        </button>
      </form>
      <p className='text-red-500'>{cardError}</p>
      {
        succes && 
        <div>
            <p className='text-green-500'>{succes}</p>
            <p >your transaction Id <span className='font-bold'>{transId}</span></p>
        </div>
      }
       </>
    );
};

export default CheckoutForm;