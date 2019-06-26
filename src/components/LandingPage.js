import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'


function LandingPage(props) {
    
    return (
        <div>
            <LoginForm />
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(LandingPage)