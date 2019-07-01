import axios from 'axios'

const GET_STORY = 'GET_STORY'
const GET_STORY_PENDING = 'GET_STORY_PENDING'
const GET_STORY_FULFILLED = 'GET_STORY_FULFILLED'
const GET_STORY_REJECTED = 'GET_STORY_REJECTED'

const GET_USER_STORY = 'GET_USER_STORY'
const GET_USER_STORY_PENDING = 'GET_USER_STORY_PENDING'
const GET_USER_STORY_FULFILLED = 'GET_USER_STORY_FULFILLED'
const GET_USER_STORY_REJECTED = 'GET_USER_STORY_REJECTED'

const initialState = {
    loading: false,
    data: null,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_STORY_PENDING:
            return { ...state, loading: true }
        case GET_STORY_FULFILLED:
            return { ...state, data: action.payload.data, loading: false }
        case GET_STORY_REJECTED:
            return { ...state, error: action.payload, loading: false }

        case GET_USER_STORY_PENDING:
                return { ...state, loading: true }
        case GET_USER_STORY_FULFILLED:
                return { ...state, data: action.payload.data, loading: false }
        case GET_USER_STORY_REJECTED:
                return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}

export function getStories() {
    return {
        type: GET_STORY,
        payload: axios.get('/api/stories')
    }
}

export function getUserStories() {
    return {
        type: GET_USER_STORY,
        payload: axios.get('/api/stories')
    }
}