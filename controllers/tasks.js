const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks }) // { task } === { task: task }
    
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${req.params.id}`})
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id)
  await Task.findByIdAndUpdate(req.params.id, {completed: !task.completed})
    .then(() => {
      res.status(200).send({...task._doc, completed: !task.completed})
    }).catch((err) => {
      res.status(400).send(err)
    })
}

const deleteTask = async (req, res) => {
  try {
  const task = await Task.findOneAndDelete({ _id: req.params.id })
  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${req.params.id}`})
  }
  res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}