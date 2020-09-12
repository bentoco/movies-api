const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./src/routes')
const port = process.env.PORT
require('dotenv').config()
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
