import React from 'react'
import { connect } from 'react-redux'

const UserAccount = props => {

    return (
        <div style={styles}>
            <p>{props.user.name}</p>
            <br/>
            <p>{props.user.email}</p>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(UserAccount)

let styles = {
    display: 'flex',
    justifyContent: 'center'

}