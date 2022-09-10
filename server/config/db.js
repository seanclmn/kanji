const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  console.log( `${process.env.MONGO_URI}`)
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
