import React, { Component } from 'react';
import SenderLocation from './SenderLocation';
import RecieverLocation from './RecieverLocation';
import OrderDetails from './OrderDetails';
import ConfirmPage from './ConfirmPage';
import Success from "./Success";
import  Confirm from 'semantic-ui-react';


export class SendOrder extends Component {
  state = {
    step: 1,
    item: "",
    location_start_lng: "",
    location_start_lat: "",
    location_end_lng: "",
    location_end_lat: "",
    recieverName: "",
    recieverPhone: "",
    additionalInfo: "",
    state: "pending",
    note:""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { item,location_start_lng,location_start_lat,location_end_lng,location_end_lat,recieverName,recieverPhone,state,note,price} = this.state;
    const values = {item,location_start_lng,location_start_lat,location_end_lng,location_end_lat,recieverName,recieverPhone,state,note,price};

    switch (step) {
      case 1:
        return (
          <SenderLocation
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <RecieverLocation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
        return (
          <OrderDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <ConfirmPage 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}

        />;
    
    case 5:
      return <Success/>;
  }
  }
}

export default SendOrder;
