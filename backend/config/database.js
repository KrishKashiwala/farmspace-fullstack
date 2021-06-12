const mongoose = require('mongoose');
require('../Models/farmerSchema')
require('dotenv').config()

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
 * string into the `.env` file
 * 
 * DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 */

const conn = process.env.DATABASE;
console.log(conn)

const connection = mongoose.connect(conn, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

mongoose.connection.on('error', (err) => console.log(`DATABASE ERROR -> ${err.message}`))

// Expose the connection
module.exports = connection;