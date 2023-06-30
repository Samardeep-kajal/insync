const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

/* Tasks Endpoint Controller */

// @desc Get Tasks
// @route /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json(tasks);
});

// @desc Get specific task
// @route /api/tasks
// @access Private
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  res.status(200).json(task);
});

// @desc Add Task
// @route /api/tasks
// @access Private
const setTask = asyncHandler(async (req, res) => {
  const task = await Task.create({
    text: req.body.text,
    type: req.body.type,
    completed: req.body.completed,
  });

  res.status(200).json(task);
});

// @desc Update Task
// @route /api/tasks/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

// @desc Delete Task
// @route /api/tasks/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  await task.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getTasks, getTask, setTask, updateTask, deleteTask };
