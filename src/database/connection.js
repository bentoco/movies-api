const mongoose = require('mongoose')

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
    console.log('Connection Established')
})

mongoose.connection.on('reconnected', () => {
    console.log('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
    console.log('Connection Disconnected')
})

mongoose.connection.on('close', () => {
    console.log('Connection Closed')
})

mongoose.connection.on('error', (error) => {
    console.log('ERROR: ' + error)
})

const run = async () => {
    const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    await mongoose.connect(uri, options)
}

run().catch((error) => console.error(error))
