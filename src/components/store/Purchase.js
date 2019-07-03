import React, { useState } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import { postPurchaseStory } from '../../redux/reducers/story'
import icon from '../../icons/dollar.png'

const Purchase = props => {
    const [state, /*setState*/] = useState({amount: +props.story[0].price})

    // const onOpened = () => {

    // }

    // const onClosed = () => {

    // }

    const onToken = (token) => {
        let {amount} = state
        amount *= 100
        token.card = void 0
        axios.post('/api/pay', {token, amount: amount })
        .then(response => {
            alert('Payment received')
            props.postPurchaseStory( props.user.user_id, props.story.story_id )
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
            <button style={{backgroundColor: 'white', border: 'none'}}><img src={icon} alt='dollar' style={{height: 30}}/></button>
        </StripeCheckout>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    let { data: story } = state.story
    return { user, story }
}

export default connect(mapStateToProps, { postPurchaseStory })(Purchase)