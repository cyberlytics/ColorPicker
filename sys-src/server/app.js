//Express
const express = require('express');
const app = express();

//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/colorpicker';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});

const db = mongoose.connection;

db.on('connected', console.log.bind(console, 'Connected to mongoDB'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Router
let palette = require('./routes/paletteRoute')

//Middleware
app.use(express.json());

//App
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/palette', palette)

app.listen(3000, function() {
    console.log('listening on 3000')
})