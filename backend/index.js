require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors')

const router = express.Router()

module.exports = router;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes)
