const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const router = require('./routes')
const port = process.env.PORT || 3000

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
    console.log(`Movies API works on port ${port}...`)
})
