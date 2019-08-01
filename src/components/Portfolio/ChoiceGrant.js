import React from 'react'
import { FullStoryCard } from '../stories/StyledCard'
import { connect } from 'react-redux'

const ChoiceGrant = props => {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p>Great Choice. Not only is Grant all the things on the previous page, he is also more handsome than both of the other two combined.</p>
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(ChoiceGrant)