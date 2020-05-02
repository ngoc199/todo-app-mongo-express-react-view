const List = require("../models/list")
const todoModel = require("../models/todo")

// Get all lists in the database
function getAllList() {
  return List.find().exec()
}

// Find a list in the database
function findListById(listId) {
  return List.findById(listId).exec()
}

// Add new list to the database
function addList(name, description) {
  let list = new List({
    name: name,
    description: description,
    todoArray: [],
  })
  list.save()
}

// Update list in the database
async function updateListById(listId, name, description) {
  await List.findByIdAndUpdate(
    listId,
    { name: name, description: description },
    (err) => {
      if (err) {
        console.error(err)
      }
    }
  )
}

// Delete list from the database
function deleteListById(listId) {
  List.findByIdAndDelete(listId, (err) => {
    if (err) {
      console.error(err)
    }
  })
}

// Get all todo in the list
function findAllTodoByListId(listId) {
  return findListById(listId).todoArray
}

// Add new todo to the list
async function addTodoToListByListId(listId, name) {
  let todo = new todoModel.Todo({
    name: name,
  })

  // Push new todo to todoArray in the list
  await List.findByIdAndUpdate(listId, { $push: { todoArray: todo } })
}

// Complete a todo in the list
async function completeTodoById(listId, todoId) {
  let list = await findListById(listId)
  let todo = list.todoArray.filter((item) => item._id == todoId)[0]
  let complete = todo.complete
  await List.updateOne(
    { _id: listId, "todoArray._id": todoId },
    { $set: { "todoArray.$.complete": !complete } }
  )
}

// Delete a todo from the list
async function deleteTodoFromListId(listId, todoId) {
  await List.findByIdAndUpdate(listId, {
    $pull: { todoArray: { _id: todoId } },
  })
}

module.exports = {
  getAllList: getAllList,
  findListById: findListById,
  addList: addList,
  updateListById: updateListById,
  deleteListById: deleteListById,
  findAllTodoByListId: findAllTodoByListId,
  addTodoToListByListId: addTodoToListByListId,
  completeTodoById: completeTodoById,
  deleteTodoFromListId: deleteTodoFromListId,
}
