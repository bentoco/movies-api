const mongoose = require('mongoose')

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

module.exports.main = async () => {
    const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        await mongoose.connect(uri, options)
        console.log('Database connected!')
    } catch (error) {
        console.log('Connection error:' + error)
    } finally {
        await mongoose.connection.close()
    }
}
