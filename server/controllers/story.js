

module.exports = {
    getAll: async (req, res) => {
        try {
            const db = req.app.get('db')
            let stories = await db.getStoriesForStore()
            res.status(200).send(stories)
        } catch (error) {
            console.log('error getting stories for store', error)
            res.status(500).send(error)
        }
    },
    getUserStories: async (req, res) => {
        try {
            const db = req.app.get('db')
            let userStories = await db.getUserStories()
            res.status(200).send(userStories)
        } catch (error) {
            console.log('error getting user stories', error)
            res.status(500).send(error)
        }
    },
    postPurchasedStory: async (req, res) => {
        try {
            const db = req.app.get('db')
            let { user_id, story_id } = req.query
            user_id = +user_id
            story_id = +story_id
            console.log(typeof user_id, typeof story_id)
            let purchasedStory = await db.postPurchase( {user_id, story_id} )
            res.status(200).send(purchasedStory)
        } catch (error) {
            console.log('error posting purchased story', error)
            res.status(500).send(error)
        }
    }
}