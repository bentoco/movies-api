const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes')
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(router);

app.get('/', function(req, res, next){
    res.send('Welcome to the Movies API !!!')
    next();
});

app.listen(port, () =>{
    console.log(`It works on port ${port}...`)
});

