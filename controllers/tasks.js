const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({})
    .catch((err) => res.status(400).send(err))

  res.send(tasks)
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id)
    .catch(() => res.status(404).send('Error: Invalid id.\nNo task matching that id was found'))

  res.status(200).send(task)
}

const updateTask = (req, res) => {
  res.send('update task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}