// app.js

const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
var cors = require('cors')
const path = require('path')
const app = express();
const kanji = require('./routes/api/kanji')
app.use('/api/kanji',kanji)


//Serve static files

app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../client/build/')});
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

connectDB()


app.use(cors({origin: true, credentials: true}))


app.use(express.json({extended: false}))

app.get('/', (req, res) => res.send('noice!'));

const port = process.env.PORT || 8082;

//use routes

app.use('/api/kanji',kanji)



app.listen(port, () => console.log(`Server running on port ${port}`));
