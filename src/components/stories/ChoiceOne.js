import React from 'react'
import choiceone from '../catstory/choiceone.png'
import { FullStoryCard } from './StyledCard'
import { connect } from 'react-redux'

const ChoiceOne = props => {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img style={{maxWidth: '100%'}} src={choiceone} alt='choiceone' />
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(ChoiceOne)