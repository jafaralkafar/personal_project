import React, { useState } from 'react'
import { connect } from 'react-redux'

import { login } from '../redux/reducers/user'

const LoginForm = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        props.login({ email, password })
    }

    return (
        <div>
            <input
                name="email"
                type="text"
                placeholder="email"
                onChange={handleEmail}/>
            <input 
                name="password"
                type="password"
                placeholder="password"
                onChange={handlePassword}/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default connect(null, { login })(LoginForm)