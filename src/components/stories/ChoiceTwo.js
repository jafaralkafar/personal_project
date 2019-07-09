import React from 'react'
import choicetwo from '../catstory/choicetwo.png'
import { FullStoryCard } from './StyledCard'
import { connect } from 'react-redux'

const ChoiceTwo = props => {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img style={{maxWidth: '100%'}} src={choicetwo} alt='choicetwo' />
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(ChoiceTwo)