import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Loading from './Loading'


function LandingPage(props) {
    return (
        <div style={{height: 'calc(93vh)', width:'100vw'}}>
            { props.loading ? <Loading /> : (props.user ? <Dashboard /> : 
            <div>
                <Link to='/register'>Register</Link>
                <br/>
                <Link to='/login'>Login</Link>
            </div>) }
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user, loading } = state.user
    
    return { user, loading }
}

export default connect(mapStateToProps)(LandingPage)