import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "../components/signUpForm/signUp.css";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
    this.paycash = this.paycash.bind(this);
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

  paycash() {
    this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1>Payment Completed</h1>;

    return (
      // <div className="checkout">
        <div className="signForm">
        <p>Would you like to pay with credit card?</p>
        <CardElement hidePostalCode={true} />
        {/* <CardElement /> */}
        <button onClick={this.submit}>Pay now</button>
        <p>Or pay with Cash?</p>
        <button onClick={this.paycash}>Pay Cash</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
