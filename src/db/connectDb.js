const mongoose = require("mongoose");
let connectionURL = process.env.DB_CONNECTION_URL;
connectionURL = connectionURL.replace('<username>', process.env.DB_USERNAME);
connectionURL = connectionURL.replace('<password>', process.env.DB_PASSWORD);

const connectDb = async () =>{
    await mongoose.connect(connectionURL, { dbName: process.env.DB_NAME });
    console.log("db connected");
}

module.exports = connectDb;