const { MongoClient } = require('mongodb')

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const client = new MongoClient(uri, options)

async function openConnection() {
    try {
        await client.connect()
        console.log('Connection Established')
        return client
    } catch (e) {
        console.error('ERROR: ' + e)
    }
}

async function closeConnection() {
    await client.close()
}
module.exports = { openConnection, closeConnection }
