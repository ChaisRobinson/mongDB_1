const Data = require("../models/data.js"); // ---------------> Controller Functions
const fetchAllData = async (req, res) => {
  // 1. Get all Datas from DB
  const data = await Data.find({});
  // 2. Send all Datas back as a response
  res.json({ data: data });
};

const fetchData = async (req, res) => {
  //1. Get id off the url
  const dataId = req.params.id;
  //2. Find the data associated with that id
  const data = await Data.findById(dataId);
  //3. Send that response with that data as the payload
  res.json({ data: data });
};

const createData = async (req, res) => {
  // 1. Get data off request body
  console.log(`BODY: ${req.body}`);
  // 2. Create new Data
  //const title = req.body.title;
  //const body = req.body.body;
  const { title, body } = req.body;
  //3. Save Data
  const data = await Data.create({ title: title, body: body });
  //4. Send response
  res.json({ data: data });
};

const updateData = async (req, res) => {
  // 1. Get id off the url
  const dataId = req.params.id;
  // 2. Get data off request body
  const { title, body } = req.body;
  // 3. Find the data associated with that id
  const Data = await Data.findByIdAndUpdate(dataId, {
    title: title,
    body: body,
  });
  // 4. Update Data
  const updatedData = await Data.findById(dataId);
  // 5. Send response
  res.json({ data: updatedData });
};

const deleteData = async (req, res) => {
  // 1. Get id off the url
  const dataId = req.params.id;
  //2. Delete the data associated with that id
  const deletedData = await Data.findByIdAndDelete({ id: dataId });
  //3. Send response
  res.json({ success: "Record has been deleted successfully" });
};

module.exports = {
  fetchAllData,
  fetchData,
  createData,
  updateData,
  deleteData,
};
