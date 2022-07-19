const mongodb = require('../db/connect')
const adddeck = async (req, res) => {
    const deck = {
        title: req.body.title
    }
    const result = await mongodb.getDb().db().collection('decks').insertOne(deck)
    console.log(result)
    res.status(200).json(result)
}

module.exports = {adddeck}