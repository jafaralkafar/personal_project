const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            const { name, email, password, isAdmin } = req.body
            let users = await db.findUserByEmail(email)
            let user = users[0]

            if (user) {
                return res.status(409).send('email already in db')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.createUser({name, email, hash, isAdmin})
            let newUser = response[0]

            delete newUser.password

            req.session.user = newUser
            res.send(req.session.user)
        } catch (error) {
            console.log('you messed up registering', error)
            res.status(500).send(error)
        }
    },
    login: async (req, res) => {
        try {
            const db = req.app.get('db')
            const { email, password } = req.body
            let users = await db.findUserByEmail(email)
            let user = users[0]
            if (!user) {
                return res.status(401).send('email or password incorrect')
            }
            let isAuthenticated = bcrypt.compareSync(password, user.password)
            if (!isAuthenticated) {
                return res.status(401).send('email or password incorrect')
            }
            delete user.password
            req.session.user = user
            res.send(req.session.user)
        } catch (error) {
            console.log('there was an error logging in', error)
            res.status(500).send(error)
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    currentUser: (req, res) => {
        res.send(req.session.user)
    },
    updateUser: async (req, res) => {
        try {
            const db = req.app.get('db')
            const { name, email } = req.body
            let { id } = req.params
            id = +id
            let foundUser = await db.findUserById([id])

            let userName = await db.updateUserName({
                id,
                name: name ? name : foundUser[0].name,
                email: email ? email : foundUser[0].email
            })
            let user = userName[0]
            delete user.password
            req.session.user = user
            res.status(200).send(req.session.user)
        } catch (error) {
            console.log('there was an error updating', error)
            res.status(500).send(error)
        }
    }
}