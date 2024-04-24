const User = require("../models/user.js");

// ---------------> Controller Functions
const fetchAllUsers = async (req, res) => {
  // 1. Get all Users from DB
  const users = await User.find({});
  // 2. Send all Users back as a response
  res.json({ users: users });
};

const fetchUser = async (req, res) => {
  //1. Get id off the url
  const userId = req.params.id;
  //2. Find the user associated with that id
  const user = await User.findById(userId);
  //3. Send that response with that user as the payload
  res.json({ user: user });
};

const createUser = async (req, res) => {
  // 1. Get data off request body
  console.log(`BODY: ${req.body}`);
  // 2. Create new User
  const { title, body } = req.body;
  //3. Save User
  const user = await User.create({ title: title, body: body });
  //4. Send response
  res.json({ user: user });
};

const updateUser = async (req, res) => {
  // 1. Get id off the url
  const userId = req.params.id;
  // 2. Get data off request body
  const { title, body } = req.body;
  // 3. Find the user associated with that id
  await User.findByIdAndUpdate(userId, { title: title, body: body });
  // 4. Update User
  const updatedUser = await User.findById(userId);
  // 5. Send response
  res.json({ user: updatedUser });
};

const deleteUser = async (req, res) => {
  // 1. Get id off the url
  const userId = req.params.id;
  //2. Delete the user associated with that id
  const deletedUser = await User.findByIdAndDelete(userId);
  //3. Send response
  res.json({ success: "Record has been deleted successfully" });
};

module.exports = {
  fetchAllUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
};
