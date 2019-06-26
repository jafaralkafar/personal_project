import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <div style={styles.navbar}>
            <Link style={styles.navbar} to='/'>Account</Link>
            <Link style={styles.navbar} to='/'>Store</Link>
            <Link style={styles.navbar} to='/'>Logout</Link>
        </div>
    )
}

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