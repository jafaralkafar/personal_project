import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { updateUser } from '../redux/reducers/user'

const UserAccount = props => {

    // create a function for the update buttons when they are pushed they will return an object, the new information to be updated and a command for the switch statement and either have an input field show up when you click on the fields and then click update or click update and have an input field populate next to the button.
    return (
        <div style={styles.container}>
            <span style={styles.rows}>
                <div style={{marginRight: '20px'}}>{props.user.name}</div>
                <button>Update</button>
            </span>
            <div style={styles.break}></div>
            <span style={styles.rows}>
                <div style={{marginRight: '20px'}}>{props.user.email}</div>
                <button>Update</button>
            </span>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}



export default connect(mapStateToProps, { updateUser })(UserAccount)

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
    },
    rows: {
        display: 'flex'
    }

}