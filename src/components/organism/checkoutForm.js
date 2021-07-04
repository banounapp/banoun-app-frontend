import React, { useState } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "./../atoms/button";
import { client } from "./../../services/client";
import { useParams } from "react-router-dom";
import spinner from "../atoms/spinner.js";

const CheckoutForm = ({ success, appointmentPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitted, setisSubmitted] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setisSubmitted(true);
    const res = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!res.error) {
      let body = {};
      const { id } = res.paymentMethod;
      body.paymentId = id;
    
      success(body);
      setisSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5" style={{ width: "85%" }}>
      <h2 className="mt-5 mb-5 text-green-600	">السعر: {appointmentPrice} دولار</h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <Button
        stylee=" shadow text-red-400 mt-5"
        enhancement={{
          style: { background: "#60A5FA", color: "white", width: "70px" },
        }}
      >
        ادفع
        {isSubmitted && (
          <svg class="animate-spin h-3 w-3 mr-3 " viewBox="0 0 24 24" style={{display:"inline-block",backgroundColor:"white"}}>
          </svg>
        )}
      </Button>
    </form>
  );
};

export default CheckoutForm;
