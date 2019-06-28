import React from 'react'
import { connect } from 'react-redux'

const UserAccount = props => {

    return (
        <div style={styles.container}>
            <span>
                <div>{props.user.name}</div>
                <button>Update</button>
            </span>
            <div style={styles.break}></div>
            <span>
                <div>{props.user.email}</div>
                <button>Update</button>
            </span>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(UserAccount)

let styles = {
    container: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        marginLeft: '20px'
    },
    break: {
        flexBasis: '100%',
        height: 0
    }

}