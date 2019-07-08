import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import UserAccount from './UserAccount'
import UserStories from './UserStories'
import { v4 as randomString } from 'uuid'
import axios from 'axios'
import { uploadUserStory } from '../redux/reducers/story'



const Dashboard = props => {
    const [fileUrl, setFileUrl] = useState('')
    const [isuploading, setIsUploading] = useState(false)
    let uploadInput = []

    const handleChange = ev => {
        setFileUrl('')
    }

    const handleUpload = (ev) => {
        let file = uploadInput.files[0]
        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`
        axios.post('/api/signs3', {
            params: {
                'file-name': fileName,
                'file-type': file.type
            },
        }).then(response => {
            const { signedRequest, url } = response.data
            setFileUrl(url)
            const options = {
                headers: {
                    'Content-Type': file.type
                }
            }
            axios.put(signedRequest, file, options)
            .then(response => {
                setIsUploading(false)
            }).catch(error => {alert("error ", JSON.stringify(error))
            })
        }).catch(err => {
            console.log(err)
        })          
    }
    
    
    return (
        <div style={styles.container}>
            <Sidebar style={styles.sidebar} />
            <div style={styles.dashboard}>
                <UserAccount />
                <input 
                    type="file"
                    accept="application/pdf"
                    onChange={handleChange} ref={(ref) => {uploadInput = ref}}
                    style={{marginLeft: 10}} />
                <button onClick={handleUpload}>Upload</button>
                <UserStories />
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}

export default connect(mapStateToProps, { uploadUserStory })(Dashboard)


let styles = {
    container: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative',
        backgroundColor: 'gray'
    },
    sidebar: {
        width: '20%',
        backgroundColor: '#142a11'
    },
    dashboard: {
        alignItems: 'left',
        justifySelf: 'center',
        width: '82%',
        marginLeft: '19%',
        backgroundColor: 'gray',
        height: '100%'
    }
}