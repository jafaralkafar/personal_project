import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Dashboard = props => {

    return (
        <div>{`${props.user.name}'s Dashboard`}</div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(Dashboard)