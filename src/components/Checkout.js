import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_2RMGhMNBYLV5H3NWsIv43AE900nJ66cJmb">
                <div className="stripe-payment">
                <h1>Payment</h1>
                <Elements>
                    <CheckoutForm />
                </Elements>
                </div>
            </StripeProvider>
        );
    }
}

export default Checkout;
