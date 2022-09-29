// app.js

const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
var cors = require('cors')
const path = require('path')
const app = express();
const kanji = require('./routes/api/kanji')

// //Serve static files
// //app.use(express.static(__dirname+'/../client/build'))
// //app.get('*', function(req, res) {
// //  res.sendFile('index.html', {root: __dirname+'/../client/build'});
// //})
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

const envMode = String(app.get('env')) === 'development' ? 'http://localhost:3000' : 'https://kanji-ecru.vercel.app' 
app.use(cors(envMode))

connectDB()
app.use('/api/kanji',kanji)




app.get('/', (req, res) => res.send('noice!'));

const port = process.env.PORT || 8082;


app.listen(port, () => console.log(`Server running on port ${port}`));
