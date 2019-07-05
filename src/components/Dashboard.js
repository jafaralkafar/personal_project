import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import UserAccount from './UserAccount'
import UserStories from './UserStories'
// import { v4 as randomString } from 'uuid'
// import axios from 'axios'
import { uploadUserStory } from '../redux/reducers/story'



const Dashboard = props => {

//     const handleUpload = ([file]) => {

//         const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`
//         axios.get('/api/signs3', {
//             params: {
//                 'file-name': fileName,
//                 'file-type': file.type
//             },
//         }).then(response => {
//             const { signedRequest, url } = response.data
//             uploadFile(file, signedRequest, url)
//         }).catch(err => {
//             console.log(err)
//         })   
//     }

//     const uploadFile = (file, signedRequest, url) => {
//         const options = {
//             headers: {
//                 'Content-Type': file.type
//             }
//         }
//         axios.put(signedRequest, file, options)
//         .then(response => {
//             setIsUploading(false)
//         }).catch(err => {
//             if (err.response.status === 403) {
//                 alert(`Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${err.stack}`)
//             } else {
//                 alert(`Error: ${err.status}\n ${err.stack}`)
//             }

//         })
//     }    

    return (
        <div style={styles.container}>
            <Sidebar style={styles.sidebar} />
            <div style={styles.dashboard}>
                <UserAccount />
                <input 
                    type="file"
                    accept="application/pdf"
                    style={{marginLeft: 10}} />
                <button>Upload</button>
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