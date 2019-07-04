import React from 'react'
import { connect } from 'react-redux'
import { FullStoryCard } from './StyledCard';

const StoryCard = props => {
    return (
        <FullStoryCard>
            <div>
                StoryCard
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(StoryCard)