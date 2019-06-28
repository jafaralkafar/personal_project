import React from 'react'

export default function Sidebar(props) {
    return (
        <div style={styles}>Sidebar</div>
    )
}


let styles = {
    display: 'flex',
    width: '20%',
    backgroundColor: '#142a11',
    position: 'fixed',
    height: '93vh',
    fontFamily: 'Georgia, serif',
    color: 'gray',
    justifyContent: 'center',
    flex: 1
}