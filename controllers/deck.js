const { ObjectId, ObjectID } = require("mongodb");
const mongodb = require("../db/connect");

const getAllDecks = async (req, res) => {
  const result = await mongodb.getDb().db().collection("decks").find()
  result.toArray().then(decks => {res.send(decks)})
  
};

const getDeck = async (req, res) => {
  const deckid = new ObjectId(req.params.id)
    await mongodb.getDb().db().collection("decks").findOne({_id: deckid}).then(decks => {res.send(decks)})
  
};

const addDeck = async (req, res) => {
  const deck = {
    title: req.body.title,
    overview: req.body.overview,
  };

  const result = await mongodb.getDb().db().collection("decks").insertOne(deck);
  res.send(result);
};

const updateDeck = async (req, res) => {
  const deckid = new ObjectId(req.params.id)
  const newtitle = req.body.title
  const result = await mongodb.getDb().db().collection("decks").updateOne({_id: deckid}, {$set: {title: newtitle}});
  res.send("updating deck");
};

const deleteDeck = async (req, res) => {
  const deckid = new ObjectId(req.params.id)
  const result = await mongodb.getDb().db().collection("decks").deleteOne({_id: deckid});
  res.send("deleting deck");
};

module.exports = {
  getAllDecks,
  getDeck,
  addDeck,
  updateDeck,
  deleteDeck,
};