// Models are a representation of our data
// Schema: we create a blueprint for the model (like a table) so we can export that format to our express sever

//------> Dependencies
const mongoose = require("mongoose");

//------> Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

//------> Model
const User = mongoose.model("User", userSchema);

//------> Exports
module.exports = User;
