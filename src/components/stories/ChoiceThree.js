import React from 'react'
import choicethree from '../catstory/choicethree.png'
import { FullStoryCard } from './StyledCard'
import { connect } from 'react-redux'

const ChoiceThree = props => {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img style={{maxWidth: '100%'}} src={choicethree} alt='choiceThree' />
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(ChoiceThree)