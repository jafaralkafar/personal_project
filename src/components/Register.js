import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../redux/reducers/user'
import { StyledLogin } from './StyledLogin'

const Register = props => {

    const [state, setState] = useState({name: '', email: '', password: '', isAdmin: false})

    const handleChange = e => {
        let { name, value } = e.target
        setState( { ...state, [name]: value })
    }

    const handleSubmit = () => {
        props.register( state )
    }

    return (
        <StyledLogin>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {(props.user) && <Redirect to='/'/>}
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    onChange={handleChange}/>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={handleChange}/>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
            </div>
        </StyledLogin>
    )
}

export default connect(null, { register })(Register)