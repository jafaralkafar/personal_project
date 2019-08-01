import React from 'react'
import { FullStoryCard } from '../stories/StyledCard'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ChoiceBrad = props => {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p>So sorry, Brad Pitt is not available for hire as a Full Stack Developer at this time, but good news, you can hit the <Link to="/about"><button>Back</button></Link> button and make another choice.</p>
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(ChoiceBrad)