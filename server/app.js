// app.js

const express = require('express');
const connectDB = require('./config/db')

const app = express();

connectDB()

app.get('/', (req, res) => res.send('noice!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
