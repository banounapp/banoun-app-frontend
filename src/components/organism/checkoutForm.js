import React from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "./../atoms/button";
import { client } from "./../../services/client";
import { useParams } from "react-router-dom";

const CheckoutForm = ({ success ,appointmentPrice}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!res.error) {
      let body = {};
      const { id } = res.paymentMethod;
      console.log(id);
      body.paymentId = id;
      console.log(res, id);
      success(body);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5" style={{ width: "85%" }}>
      <h2 className="mt-5 mb-5 text-green-600	">السعر:  {appointmentPrice} دولار</h2>
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
      </Button>
    </form>
  );
};

export default CheckoutForm;
