import React from 'react'
import { FullStoryCard } from '../stories/StyledCard'
import { connect } from 'react-redux'
import fluber from './Images/fluber.jpg'
import pyps from './Images/pyps.jpg'

const ChoiceGrant = props => {
    return (
        <FullStoryCard>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <p>Great Choice. Not only is Grant all the things on the previous page, he is also more handsome than both of the other two combined.</p>
                    <br />
                    <h1>Phone: 385-235-9064</h1>
                    <br />
                    <h1>Email: granttfox@gmail.com</h1>
                    <br />
                    <a style={{textDecoration: 'none', fontSize: '2em'}} href='https://www.linkedin.com/in/web-software-dev-grant-fox/'>LinkedIn Account</a>
                    <br />
                    <br />
                    <a style={{textDecoration: 'none', fontSize: '2em'}} href='https://www.pypstories.com'>PYPS (Personal Project)</a>
                    <br />
                    <br />
                    <a style={{textDecoration: 'none', fontSize: '2em'}} href='http://138.68.233.208:5020/#/'>Flüber (Group Project)</a>
                </div>
                <div>
                    <img src={pyps} alt='personal project' />
                    <p>PYPS is a choose your own adventure style platform website where users can upload their own stories for sharing or for sale. It was Grant's personal project while at DevMountain.</p>
                </div>
                <div>
                    <img src={fluber} alt='group project' />
                    <p>Flüber is an online marketplace where private and charter jet operators can go to sell their excess seats to users of the site. Letting more passengers skip the TSA lines and just the main awfulness of the modern Airport experience.</p>
                </div>
                
            </div>
        </FullStoryCard>
    )
}

export default connect(null)(ChoiceGrant)