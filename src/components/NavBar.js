import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

function NavBar(props) {
    return (
        <div style={styles.navbar}>
            <Link style={styles.navbar} to='/'>Account</Link>
            <Link style={styles.navbar} to='/'>Store</Link>
            <Link style={styles.navbar} onClick={props.logout} to='/'>Logout</Link>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { logout })(NavBar)

let styles = {
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        textDecoration: 'none',
        color: 'inherit',
        fontFamily: 'inherit',
        marginRight: '10px'
    }
}
