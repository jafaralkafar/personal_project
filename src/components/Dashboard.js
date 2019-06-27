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
                {`${props.user.name}'s Dashboard`}
                <UserAccount style={styles.dashboard}/>
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
        
    },
    sidebar: {
        width: '20%',
        backgroundColor: '#142a11' 
    },
    dashboard: {
        alignItems: 'center',
        border: '1px dotted black',
        width: '85%'
    }
}