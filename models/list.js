const mongoose = require("mongoose")
const { todoSchema } = require("./todo")

// Define List Schema
const listSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  todoArray: [todoSchema],
})

// Create List Model
const List = mongoose.model("List", listSchema)

module.exports = List
