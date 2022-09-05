// app.js

const express = require('express');
const connectDB = require('./config/db')
var cors = require('cors')

const app = express();

const kanji = require('./routes/api/kanji')

connectDB()


app.use(cors({origin: true, credentials: true}))


app.use(express.json({extended: false}))

app.get('/', (req, res) => res.send('noice!'));

const port = process.env.PORT || 8082;

//use routes

app.use('/api/kanji',kanji)



app.listen(port, () => console.log(`Server running on port ${port}`));
