//screen 1
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';



export class UserForm extends Component {
    state = {
        step: 1,
        mobile: '',
        password: '',
        userType: '',
        name:'',
        user_id:0,
    }

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { mobile, password, userType,name } = this.state;
        const values = { mobile, password, userType,name}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return (
                    <Confirm 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    />
                );
            case 3:
                return <Success/> 
        }
        
       
    }
}

export default UserForm
