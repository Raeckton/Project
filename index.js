const express = require('express')
const bodyParser = require("body-parser")
const connect = require('./db/connect')
const app = express()
const port = 3000
const cors = require('cors')
const deck = require("./routes/deck")

app
  .use(bodyParser.json())
  .use(cors())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow_Origin", "*");
    next();
  })
  .use("/decks", deck);




connect.initDb(err => {
    if (err) {
        console.log(err)
    } else {app.listen(port); console.log(`connected to database ${port}`)}
    
})