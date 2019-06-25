import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/reducers/user'

function LandingPage(props) {
    
    return (
        <div>

        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { login })(LandingPage)