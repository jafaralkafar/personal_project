import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getStories } from '../../redux/reducers/story'

function Store(props) {

    useEffect((props) => {
        props.getStories()
    }, [])

    return (
        <div style={styles}>
            Store
        </div>
    )
}




export default connect(null, { getStories })(Store)

let styles = {
    backgroundColor: 'gray',
    height: '100vh'
}