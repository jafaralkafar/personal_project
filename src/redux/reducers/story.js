import axios from 'axios'

const GET_ALL_STORIES = 'GET_ALL_STORIES'
const GET_ALL_STORIES_PENDING = 'GET_ALL_STORIES_PENDING'
const GET_ALL_STORIES_FULFILLED = 'GET_ALL_STORIES_FULFILLED'
const GET_ALL_STORIES_REJECTED = 'GET_ALL_STORIES_REJECTED'

const GET_USER_STORY = 'GET_USER_STORY'
const GET_USER_STORY_PENDING = 'GET_USER_STORY_PENDING'
const GET_USER_STORY_FULFILLED = 'GET_USER_STORY_FULFILLED'
const GET_USER_STORY_REJECTED = 'GET_USER_STORY_REJECTED'

const POST_STORY = 'POST_STORY'
const POST_STORY_PENDING = 'POST_STORY_PENDING'
const POST_STORY_FULFILLED = 'POST_STORY_FULFILLED'
const POST_STORY_REJECTED = 'POST_STORY_REJECTED'

const DELETE_USER_STORY = 'DELETE_USER_STORY'
const DELETE_USER_STORY_PENDING = 'DELETE_USER_STORY_PENDING'
const DELETE_USER_STORY_FULFILLED = 'DELETE_USER_STORY_FULFILLED'
const DELETE_USER_STORY_REJECTED = 'DELETE_USER_STORY_REJECTED'

const initialState = {
    loading: false,
    data: [],
    userStories: [],
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_STORIES_PENDING:
            return { ...state, loading: true }
        case GET_ALL_STORIES_FULFILLED:
            return { ...state, data: action.payload.data, loading: false }
        case GET_ALL_STORIES_REJECTED:
            return { ...state, error: action.payload, loading: false }

        case GET_USER_STORY_PENDING:
                return { ...state, loading: true }
        case GET_USER_STORY_FULFILLED:
                return { ...state, userStories: action.payload.data, loading: false }
        case GET_USER_STORY_REJECTED:
                return { ...state, error: action.payload, loading: false }

        case POST_STORY_PENDING:
            return { ...state, loading: true }
        case POST_STORY_FULFILLED:
                return { ...state, loading: false }
        case POST_STORY_REJECTED:
                return { ...state, error: action.payload, loading: false }

        case DELETE_USER_STORY_PENDING:
            return { ...state, loading: true }
        case DELETE_USER_STORY_FULFILLED:
                return { ...state, data: action.payload.data, loading: false }
        case DELETE_USER_STORY_REJECTED:
                return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}

export function getAll() {
    return {
        type: GET_ALL_STORIES,
        payload: axios.get('/api/stories')
    }
}

export function getUserStories() {
    return {
        type: GET_USER_STORY,
        payload: axios.get('/api/stories/user-stories')
    }
}

export function postPurchaseStory(userId, storyId) {
    return {
        type: POST_STORY,
        payload: axios.post(`/api/stories?user_id=${userId}&story_id=${storyId}` )
    }
}

export function deleteUserStory(id) {
    return {
        type: DELETE_USER_STORY,
        payload: axios.delete(`/api/stories/${id}`)
    }
}