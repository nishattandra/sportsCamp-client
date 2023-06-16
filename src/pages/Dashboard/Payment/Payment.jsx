import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData,} from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const paymentclass = useLoaderData()
    const bill = paymentclass.price;
    const price = parseFloat(bill.toFixed(2))
    return (
        <div className="w-full mt-24 ">
            <h2 className="text-3xl text-center -mb-7"> Pay Here</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm paymentclass={paymentclass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;