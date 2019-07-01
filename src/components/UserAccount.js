import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { updateUser } from '../redux/reducers/user'

const UserAccount = props => {

    const [state, setState] = useState({name: '', email: '', edittingName: false, edittingEmail: false})
    // create a function for the update buttons when they are pushed they will return an object, the new information to be updated and a command for the switch statement and either have an input field show up when you click on the fields and then click update or click update and have an input field populate next to the button.

    const updateInfo = () => {
        props.updateUser( props.user.user_id, state )
        setState({ edittingEmail: false, edittingName: false })
    }

    const handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    return (
        <div style={styles.container}>
            <span style={styles.rows}>
                {!(state.edittingName) ? 
                    <span>
                        <div style={{marginRight: '20px'}}>{props.user.name}</div>
                        <button onClick={()=>setState({...state, edittingName: true})}>
                            Edit
                        </button>
                    </span>
                     :
                    <span>
                        <input 
                            name="name"
                            type='text'
                            placeholder={props.user.name}
                            onChange={handleChange} />
                        <button onClick={updateInfo}>Update</button>
                    </span>                    
                }
            </span>
            <div style={styles.break}></div>
            <span style={styles.rows}>
            {!(state.edittingEmail) ? 
                    <span>
                        <div style={{marginRight: '20px'}}>{props.user.email}</div>
                        <button onClick={()=>setState({...state, edittingEmail: true})}>
                            Edit
                        </button>
                    </span>
                     :
                    <span>
                        <input 
                            name="email"
                            type='email'
                            placeholder={props.user.email}
                            onChange={handleChange} />
                        <button onClick={updateInfo}>Update</button>
                    </span>                    
                }
            </span>
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user
    return { user }
}



export default connect(mapStateToProps, { updateUser })(UserAccount)

let styles = {
    container: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        marginLeft: '20px'
    },
    break: {
        flexBasis: '100%',
        height: 0
    },
    rows: {
        display: 'flex'
    }

}