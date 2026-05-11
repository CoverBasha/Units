const mongoose = require("mongoose");

const uri = process.env.DBURI;

const connectDB = async () => await mongoose.connect(uri);

module.exports = connectDB;