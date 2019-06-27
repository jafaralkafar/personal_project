import React from 'react'
import { connect } from 'react-redux'

const UserAccount = props => {

    return (
        <div>
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(UserAccount)