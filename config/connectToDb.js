// Responsible for connecting the Mongoose DB to the Express Server Application
require("dotenv").config();

const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Currently Connected to MongoDB Cluster");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

module.exports = connectToDb;
