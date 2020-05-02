var express = require("express")
const listService = require("../services/listService")
var router = express.Router()

/* GET home page. */
router.get("/", async (req, res) => {
  let listArray = await listService.getAllList()

  res.render("Index", { title: "All Lists", listArray: listArray })
})

// Add new list
router.post("/", async (req, res) => {
  let data = req.body
  await listService.addList(data.name, data.description)
  res.redirect("/")
})

// Get a list
router.get("/:listId", async (req, res) => {
  let listId = req.params.listId
  let list = await listService.findListById(listId)
  res.render("ListView", { title: list.name, list: list })
})

// Update list
router.get("/:listId/edit", async (req, res) => {
  let listId = req.params.listId
  let list = await listService.findListById(listId)
  res.render("EditList", { title: "Edit list", list: list })
})
router.post("/:listId/edit", async (req, res) => {
  let listId = req.params.listId
  let name = req.body.name
  let description = req.body.description
  await listService.updateListById(listId, name, description)
  res.redirect("/")
})

// Delete list
router.get("/:listId/delete", async (req, res) => {
  let listId = req.params.listId
  await listService.deleteListById(listId)
  res.redirect("/")
})

// Add Todo to list
router.post("/:listId", async (req, res) => {
  let listId = req.params.listId
  let todoName = req.body.name
  await listService.addTodoToListByListId(listId, todoName)
  res.redirect(`/${listId}`)
})

// Update Complete todo
router.get("/:listId/:todoId/complete", async (req, res) => {
  let listId = req.params.listId
  let todoId = req.params.todoId
  await listService.completeTodoById(listId, todoId)
  res.redirect(`/${listId}`)
})

// Delete Todo from list
router.get("/:listId/:todoId/delete", async (req, res) => {
  let listId = req.params.listId
  let todoId = req.params.todoId
  await listService.deleteTodoFromListId(listId, todoId)
  res.redirect(`/${listId}`)
})

module.exports = router
