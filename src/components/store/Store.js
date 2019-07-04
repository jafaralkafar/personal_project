import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAll } from '../../redux/reducers/story'
import { Card } from '../StyledComponents/PreviewCards'
import Purchase from './Purchase'


const Store = props => {
    const { getAll } = props
    useEffect(() => {
        getAll()
    }, [getAll])
    return (
        <div style={styles}>
            {props.story.map(eachStory => {
                return (
                    <Card
                        key={eachStory.story_id}>
                        <h3>{eachStory.title}</h3>
                        <p>{eachStory.storydesc}</p>
                        <div>
                            <Purchase/>
                            {eachStory.price}
                        </div>
                    </Card>
                )
            })
            }
        </div>
    )
}

// clicking on one of the preview cards in the store will make it put a story card on the screen with the three choice cards at the bottom. it will only be one page, clicking an x in the upper left corner will go back to the store and the preview cards will have a small description and a purchase icon

let mapStateToProps = state => {
    let { data: story, loading } = state.story
    return { story, loading }
}


export default connect(mapStateToProps, { getAll })(Store)

let styles = {
    height: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    marginTop: 10
}