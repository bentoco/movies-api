const mongoose = require('mongoose')

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(uri, options)
mongoose.connection.on('error', () => console.error('Connection error:'))
mongoose.connection.once('open', () => console.log('Database connected!'))

// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases()
//     console.log('Databases:')
//     databasesList.databases.forEach((db) => console.log(` - ${db.name}`))
// }
