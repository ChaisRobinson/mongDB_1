// npm init -y
// $ npm i nodemon express mongoose dotenv cors
// start tag in package.json => "start": "nodemon server.js"
// big 3 express (express, app, listen), mongoose, cors

require("dotenv").config();
// -----> allows .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
// This pulls our Mongoose connection into application
//  --> connectToDb()
const Note = require("./models/note.js");
const notesController = require("./controllers/notesController.js");
const User = require("./models/user.js");
const userController = require("./controllers/userController.js");
const Data = require("./models/data.js");
const dataController = require("./controllers/dataController.js");

const cors = require("cors");
// ---> Recieving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json
app.use(cors());

connectToDb();
// This initializes our connectToDB() function

//------------------------------------------------------------------------> reQs

// -----------------------------------------------------------------------> Routes
// Establish CRUD Routes for our Notes Model
// -------------------------------------------------------------------------> Root Route
app.get("/", (req, res) => {
  res.send("This is the root of our server");
});

// -------------------------------------------------------------------------> Read Route

// ---------- Get all Notes
app.get("/notes", notesController.fetchAllNotes);

// ---------- Get a sepcific Note by ID
app.get("/notes/:id", notesController.fetchNote);

// -------------------------------------------------------------------------> Create/Post Route for notes
// ---------- Create Notes
app.post("/notes", notesController.createNote);

// -------------------------------------------------------------------------> Update Route for notes
// ---------- Update Notes
app.put("/notes/:id", notesController.updateNote);
// -------------------------------------------------------------------------> Delete Route for notes
// ---------- Delete Notes
app.delete("/notes/:id", notesController.deleteNote);
//------------------------------------------------------------------------------------------> End CRUD Routes for notes

// ---------- Get all Users
app.get("/user", userController.fetchAllUsers);

// ---------- Get a sepcific User by ID
app.get("/user/:id", userController.fetchUser);

// -------------------------------------------------------------------------> Create/Post Route for users
// ---------- Create an User
app.post("/user", userController.createUser);

// -------------------------------------------------------------------------> Update Route for users
// ---------- Update an User
app.put("/user/:id", userController.updateUser);
// -------------------------------------------------------------------------> Delete Route for users
// ---------- Delete an User
app.delete("/user/:id", userController.deleteUser);
//------------------------------------------------------------------------------------------> End CRUD Routes for users

// ---------- Get all Data
app.get("/data", dataController.fetchAllData);

// ---------- Get a specific Data by ID
app.get("/data/:id", dataController.fetchData);

// -------------------------------------------------------------------------> Create/Post Route for data
// ---------- Create a Data
app.post("/data", dataController.createData);

// -------------------------------------------------------------------------> Update Route for data
// ---------- Update a Data
app.put("/data/:id", dataController.updateData);

// -------------------------------------------------------------------------> Delete Route for data
// ---------- Delete a Data
app.delete("/data/:id", dataController.deleteData);

//------------------------------------------------------------------------------------------> End CRUD Routes for data

app.listen(PORT, () => {
  console.log(`Express Server Listening on port number: ${PORT}`);
});
