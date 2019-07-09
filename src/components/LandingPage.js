import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Loading from './Loading'



function LandingPage(props) {
    return (
        <div style={styles.container}>
            { props.loading ? <Loading /> : (props.user ? <Dashboard /> : 
            <div style={styles.login}>
                <Link to='/login'>Login</Link>
                <div style={styles.break}></div>
                <Link to='/register'>Register</Link>
            </div>) }
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user, loading } = state.user
    
    return { user, loading }
}

export default connect(mapStateToProps)(LandingPage)

let styles = {
    container: {
        height: '93vh',
        width: '100%',
    },
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    break: {
        flexBasis: '100%',
        height: 0
    }
}    