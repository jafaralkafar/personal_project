import React from 'react'

export default function Sidebar(props) {
    return (
        <div style={styles}>Sidebar</div>
    )
}


let styles = {
    width: '20%',
    backgroundColor: '#142a11',
    position: 'fixed',
    height: '93vh',
    fontFamily: 'Georgia, serif',
    color: 'gray',
    display: 'flex',
    justifyContent: 'center'
}