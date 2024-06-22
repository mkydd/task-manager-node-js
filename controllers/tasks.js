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
    .catch(() => res.status(400).send('Error: Invalid id.\nNo task matching that id was found'))

  res.status(200).send(task)
}

const updateTask = async (req, res) => {
  
}

const deleteTask = async (req, res) => {
  await Task.deleteOne({ _id: req.params.id })
    .catch((err) => res.status(400).send(err))

  res.status(200).json({ id: req.params.id })
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}