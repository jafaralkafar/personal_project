import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import icon from '../../icons/pypsicon'

const Purchase = (props) => {
    const [state, setState] = useState({amount: 0})

    const onOpened = () => {

    }

    const onClosed = () => {

    }

    const onToken = (token) => {
        let {amount} = state
        amount /= 100
        token.card = void 0
        axios.post('/api/payment', {token, amount: amount })
        .then(response => {
            alert('Payment received')
        })
    }

    return (
        <StripeCheckout
            name="PYPS"
            description="Book Purchase"
            image={icon}
            amount={state.amount}
            currency="USD"
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={onToken}
            allowRememberMe={true}
            >
                
        </StripeCheckout>
    )
}