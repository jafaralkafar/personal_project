import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function LandingPage(props) {
    console.log(props.user)
    return (
        <div>
            { !(props.user) && <Link to='/login'>Login</Link>}
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(LandingPage)