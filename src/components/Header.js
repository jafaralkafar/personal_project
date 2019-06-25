import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import pypsIcon from '../icons/pypsIcon.png'
import { logout } from '../redux/reducers/user'
import Tilt from 'react-tilt'
import NavBar from './NavBar'

function Header(props) {
    let { user } = props
    return (
        <div style={styles.header}>
            <Link to="/">
                <Tilt options={{max: 35}}>
                    <img style={styles.logo} src={pypsIcon} alt="Pyps Logo"/>
                </Tilt>  
            </Link>
            <Link to='/' style={{textDecoration:"none", color:"inherit"}}>
                <span>PYPS</span>
            </Link>
            <div style={styles.navbar}>
                { user && <NavBar />}
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, {logout})(Header)

let styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#0a4d27',
        fontFamily: 'Georgia, serif'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        height: 50
    },
    navbar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    }
}