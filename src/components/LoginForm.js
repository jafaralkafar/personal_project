import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../redux/reducers/user'

const LoginForm = props => {
    
    const [state, setState] = useState({email: '', password: ''})
    
    const handleChange = e => {
        let { name, value } = e.target
        setState( {...state, [name]: value})
    }
    

    const handleSubmit = () => {
        props.login( state )
    }

    return (
        <div>
            <input
                name="email"
                type="text"
                placeholder="email"
                onChange={handleChange}/>
            <input 
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}/>
                <Link to='/'>
                    <button onClick={handleSubmit}>Login</button>
                </Link>
            <br/>
        </div>
    )
}

export default connect(null, { login })(LoginForm)