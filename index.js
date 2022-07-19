const express = require('express')
const connect = require('./db/connect')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
}).use('/deck', require('./routes/deck'))



connect.initDb(err => {
    if (err) {
        console.log(err)
    } else {app.listen(port); console.log(`connected to database ${port}`)}
    
})