import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckoutForm from "./checkoutForm"
// you should use env variables here to not commit this
// but it is a public key anyway, so not as sensitive
// const stripePromise = loadStripe(process.env.REACT_APP_KEY);
const stripePromise = loadStripe("pk_test_51J2iLsFTitntQZY98AJilNpcxnkf2APy6fERHfsJ9soAqJvzkaR4bfkcih0V4mE1DYj26ePRUtMo8XV0EFnym3xB00oMw59cqJ");


let Payment = ({setpaymentMethod, setviewNum ,setpaymentId,success,appointmentPrice}) => {
    // const [status, setStatus] = React.useState("ready");
  
    // //like is loading
    // if (status === "success") {
    //   return <div>Congrats !</div>;
    // }
  
    return (
      <Elements stripe={stripePromise} style={{width:"100%"}}>
        <CheckoutForm
          success={success}
          setpaymentMethod={setpaymentMethod} setviewNum={setviewNum} 
          setpaymentId={setpaymentId}
          appointmentPrice={appointmentPrice}

        />
      </Elements>
    );
  };
  
  export default Payment;