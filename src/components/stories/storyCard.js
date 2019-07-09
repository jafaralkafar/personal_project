import React from 'react'
import { connect } from 'react-redux'
import { FullStoryCard } from './StyledCard';
import { Card } from '../StyledComponents/PreviewCards'
import mainpanel from '../catstory/mainpanel.png'
import firstchoice from '../catstory/firstchoice.png'
import secondchoice from '../catstory/secondchoice.png'
import thirdchoice from '../catstory/thirdchoice.png'
import { Link } from 'react-router-dom'

const StoryCard = props => {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img style={{maxWidth: '100%'}} src={mainpanel} alt='mainpanel' />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Card>
                    <Link to='/choiceone'>
                        <img style={{maxWidth: '100%'}} src={firstchoice} alt='firstchoice' />
                    </Link>
                </Card>
                <Card>
                    <Link to='/choicetwo'>
                        <img style={{maxWidth: '100%'}} src={secondchoice} alt='secondchoice' />
                    </Link>
                </Card>
                <Card>
                    <Link to='/choicethree'>
                        <img style={{maxWidth: '100%'}} src={thirdchoice} alt='thirdchoice' />
                    </Link>
                </Card>
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(StoryCard)