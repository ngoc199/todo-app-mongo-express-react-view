const mongoose = require("mongoose")

// Define Todo Schema
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
})

// Create Todo Model
const Todo = mongoose.model("Todo", todoSchema)

module.exports = {
  todoSchema: todoSchema,
  Todo: Todo,
}
