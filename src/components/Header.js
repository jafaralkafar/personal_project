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
            <Link to='/' style={styles.logo}>
                <div style={{display: 'flex', alignItems:'center'}}>PYPS</div>
            </Link>
            <div>
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
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#142a11',
        fontFamily: 'Georgia, serif',
        color: 'gray',
        position: '-webkit-sticky',
        // eslint-disable-next-line no-dupe-keys
        position: 'sticky',
        top: 0,
        width: '100%'
    },
    logo: {
        flex: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        height: 50,
        color: 'inherit',
        fontFamily: 'inherit',
        textDecoration: 'none'
    }
}