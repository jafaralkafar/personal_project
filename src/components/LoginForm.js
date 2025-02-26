import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../redux/reducers/user'
import { StyledLogin } from './StyledLogin'

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
        <StyledLogin>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {(props.user) && <Redirect to='/'/>}
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
                    <button onClick={handleSubmit}>Login</button>
                <br/>
            </div>
        </StyledLogin>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}
export default connect(mapStateToProps, { login })(LoginForm)