// Models are a representation of our data
// Schema: we create a blueprint for the model (like a table) so we can export that format to our express sever

//------> Dependencies
const mongoose = require("mongoose");

//------> Schema
const dataSchema = new mongoose.Schema({
  post: String,
  date: String,
});

//------> Model
const Data = mongoose.model("Data", dataSchema);

//------> Exports
module.exports = Data;
