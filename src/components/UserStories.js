import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserStories, deleteUserStory } from '../redux/reducers/story'
import { Card } from './StyledComponents/PreviewCards';

const UserStories = props => {
    const { getUserStories } = props
    useEffect(() => {
        getUserStories()
    }, [getUserStories])
    
    

    return (
        <div style={{marginLeft: '20px'}}>
                <h2>Your Stories:</h2>
                <div style={styles}>
                {props.story.map(eachStory => {
                    return (
                        <Card
                            key={eachStory.story_id}>
                            <h3>{eachStory.title}</h3>
                            <p>{eachStory.storydesc}</p>
                            <p>Author: {eachStory.name}</p>
                            <button onClick={() => props.deleteUserStory(eachStory.id)}>
                                Delete
                            </button>
                        </Card>
                        )
                    })}
                </div>
        </div>
    )
}


let mapStateToProps = state => {
    let { userStories: story, loading } = state.story
    return { story, loading }
}

export default connect(mapStateToProps, { getUserStories, deleteUserStory })(UserStories)

let styles = {
    height: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    marginTop: 10
}