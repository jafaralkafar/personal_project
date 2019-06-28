import React from 'react'
import { connect } from 'react-redux';

function Store(props) {
    return (
        <div>Store</div>
    )
}


let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps)(Store)