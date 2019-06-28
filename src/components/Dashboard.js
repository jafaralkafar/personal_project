import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import UserAccount from './UserAccount'


const Dashboard = props => {

    return (
        <div style={styles.container}>
            <Sidebar style={styles.sidebar} />
            <div style={styles.dashboard}>
                <div>{`${props.user.name}'s Dashboard`}</div>
                <UserAccount />
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(Dashboard)


let styles = {
    container: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
    },
    sidebar: {
        width: '20%',
        backgroundColor: '#142a11'
    },
    dashboard: {
        alignItems: 'center',
        justifySelf: 'center',
        border: '1px dotted black',
        width: '80%',
        marginLeft: '20%'
        
    }
}