import React from 'react'
import { FullStoryCard } from '../stories/StyledCard'
import { Card } from '../StyledComponents/PreviewCards'
import { Link } from 'react-router-dom'
import bradpitt from './Images/bradpitt.jpg'
import willsmith from './Images/willsmith.jpg'
import grantfox from './Images/grantfox.jpg'

export default function About(props) {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p>Who knows React, Hooks, Redux, JavaScript, HTML, CSS, Styled Components, Postgres, Express, Node, S3, Git, GitHub?<br />
                Who loves to write creative stories and built this awesome website, hopefully, to become a platform for others to share their writings?<br/>
                Who has a B.S. in IT/Software Development?<br/>
                Who tries to camp/fish/hunt whenever he can (not as often as he would like) and generally spend time in the great outdoors?<br/>
                Who served in the Air Force for 6 years as an Arabic Linguist and Geospatial Analyst?<br/>
                Who loves to garden and grow tasty fruits and vegetables and wonderful smelling plants?<br/>
                And who would you like to hire to use all his skills and knowledge to better your business?
                </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Card>
                    <Link to='/bradpitt'>
                        <img style={{maxWidth: '100%'}} src={bradpitt} alt='brad pitt' />
                    </Link>
                </Card>
                <Card>
                    <Link to='/grantfox'>
                        <img style={{maxWidth: '100%'}} src={grantfox} alt='the most handsome one' />
                    </Link>
                </Card>
                <Card>
                    <Link to='/willsmith'>
                        <img style={{maxWidth: '100%'}} src={willsmith} alt='will smith'/>
                    </Link>
                </Card>
            </div>
        </FullStoryCard>
    )
}