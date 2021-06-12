//Express
const express = require('express');
const cors = require('cors')
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
let rating = require('./routes/ratingRoute')

//Middleware
app.use(express.json());
app.use(cors());

//App
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/palette', palette)
app.use('/rating', rating)

app.listen(5000, function() {
    console.log('listening on 5000')
})