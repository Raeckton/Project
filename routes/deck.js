const routes = require("express").Router();

const controller = require("../controllers/deck");

routes.get("/", controller.getAllDecks);

routes.get("/:id", controller.getDeck);

routes.post("/", controller.addDeck);

routes.patch("/:id", controller.updateDeck);

routes.delete("/:id", controller.deleteDeck);

module.exports = routes;