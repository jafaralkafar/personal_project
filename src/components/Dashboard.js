import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import UserAccount from './UserAccount'
import UserStories from './UserStories'



const Dashboard = props => {

    return (
        <div style={styles.container}>
            <Sidebar style={styles.sidebar} />
            <div style={styles.dashboard}>
                <UserAccount />
                <UserStories />
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
        backgroundColor: 'gray'
    },
    sidebar: {
        width: '20%',
        backgroundColor: '#142a11'
    },
    dashboard: {
        alignItems: 'left',
        justifySelf: 'center',
        width: '82%',
        marginLeft: '19%',
        backgroundColor: 'gray',
        height: '100%'
    }
}