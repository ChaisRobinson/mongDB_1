// Models are a representation of our data
// Schema: we create a blueprint for the model (like a table) so we can export that format to our express sever

//------> Dependencies
const mongoose = require("mongoose");

//------> Schema
const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});

//------> Model
const Note = mongoose.model("Note", noteSchema);

//------> Exports
module.exports = Note;
