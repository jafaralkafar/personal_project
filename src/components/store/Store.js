import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getStories } from '../../redux/reducers/story'
import { Card } from '../StyledComponents/PreviewCards'
import Purchase from './Purchase'


const Store = props => {

    useEffect(() => {
        getStories()
    }, [])

    return (
        <div style={styles}>
            <Card>
                <div>Store</div>
                <Purchase/>
            </Card>
            <Card>
                Store 2
            </Card>
        </div>
    )
}

// clicking on one of the preview cards in the store will make it put a story card on the screen with the three choice cards at the bottom. it will only be one page, clicking an x in the upper left corner will go back to the store and the preview cards will have a small description and a purchase icon



export default connect(null, { getStories })(Store)

let styles = {
    height: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    marginTop: 10
}