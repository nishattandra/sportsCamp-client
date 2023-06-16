import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProviders";
import './CheckoutForm.css'


const CheckoutForm = ({ paymentclass, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        console.log(price)
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                useremail: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classname: paymentclass.classname,
                instructor: paymentclass.instructor,
                email: paymentclass.email,
            }
            axiosSecure.post('/student/paymenthistory', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        fetch(`http://localhost:5000/student/paidclass/${paymentclass._id}?status=${'paid'}`, {
                            method: 'PATCH',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem('access-token')}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.modifiedCount) {
                                    fetch(`http://localhost:5000/student/updateapproved/${paymentclass.classid}`, {
                                        method: 'PATCH',
                                        headers: {
                                            'content-type': 'application/json',
                                            authorization: `Bearer ${localStorage.getItem('access-token')}`
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            console.log(data)
                                            if (data.modifiedCount) {
                                                alert("Payment Successfull")
                                            }
                                        })
                                }
                            })
                    }
                })
        }


    }

    return (
        <>
            <form className="" onSubmit={handleSubmit}>
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
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;