import React from 'react'
import { connect } from 'react-redux'
import { FullStoryCard } from './StyledCard';
import { Card } from '../StyledComponents/PreviewCards'

const StoryCard = props => {
    return (
        <FullStoryCard>
            <div>
                StoryCard
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Card>Choice</Card>
                <Card>Choice</Card>
                <Card>Choice</Card>
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(StoryCard)