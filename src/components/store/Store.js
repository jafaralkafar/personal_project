import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getStories } from '../../redux/reducers/story'
import { Card } from './PreviewCards'
import Tilt from 'react-tilt'

const Store = props => {

    useEffect(() => {
        getStories()
    }, [])

    return (
        <div style={styles}>
            <Tilt options={{max: 20, reverse: true}}>
                <Card>
                    Store
                </Card>
            </Tilt>
            <Tilt>
                <Card>
                    Store 2
                </Card>
            </Tilt>
        </div>
    )
}




export default connect(null, { getStories })(Store)

let styles = {
    height: '100vh'
}