import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <div>
            <Link to='/'>Account</Link>
            <Link to='/'>Store</Link>
            <Link to='/'>Logout</Link>
        </div>
    )
}