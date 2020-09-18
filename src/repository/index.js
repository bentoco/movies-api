const connect = require('../database/connection')

async function movies() {
    const database = await connect.openConnection()
    const col = database.db('sample_mflix')
    const movies = col.collection('movies')
    try {
        const collec = await movies.find({}).toArray()
        console.log(collec)
    } catch (error) {
        console.log(error)
    }
    connect.closeConnection()
}
