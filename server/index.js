const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv/config')

const AuthCtrl = require('./controllers/auth.js')
const StoryCtrl = require('./controllers/story.js')
const PayCtrl = require('./controllers/pay.js')
const SThreeCtrl = require('./controllers/sthree.js')

const app = express()

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is on')
    app.listen(SERVER_PORT, ()=> console.log('listening', SERVER_PORT))
})

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*365
    }
}))

app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)
app.get('/auth/logout', AuthCtrl.logout)
app.get('/auth/currentUser', AuthCtrl.currentUser)
app.put('/auth/updateUser/:id', AuthCtrl.updateUser)

app.get('/api/stories', StoryCtrl.getAll)
app.get('/api/stories/user-stories', StoryCtrl.getUserStories)
app.post('/api/stories', StoryCtrl.postPurchasedStory)
app.delete('/api/stories/:id', StoryCtrl.deleteUserStory)

app.post('/api/pay', PayCtrl.pay)

app.get('/api/signs3', SThreeCtrl.getFile)