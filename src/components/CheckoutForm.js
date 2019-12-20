import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/payment/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
    });

    if (response.ok) this.setState({complete: true});
}

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to pay with credit card?</p>
        <CardElement hidePostalCode={true} />
        {/* <CardElement /> */}
        <button onClick={this.submit}>Pay now</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './CheckoutForm';

{/* <StripeProvider apiKey="pk_test_2RMGhMNBYLV5H3NWsIv43AE900nJ66cJmb">
<div className="stripe-payment">
  <h1>Pay with Stripe</h1>
  <Elements>
    <CheckoutForm />
  </Elements>
</div>
</StripeProvider> */}

// curl -silent https://api.stripe.com/v1/tokens \
//  -u pk_test_2RMGhMNBYLV5H3NWsIv43AE900nJ66cJmb: \
//  -d card[number]=4242424242424242 \
//  -d card[exp_month]=12 \
//  -d card[exp_year]=2020 \
//  -d card[cvc]=123 | grep tok_