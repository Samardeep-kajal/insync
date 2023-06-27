const express = require("express");
const router = express.Router();

/* Tasks Endpoint Controller */

// @desc Get Tasks
// @route /api/tasks
// @access Private
const getTasks = (req, res) => {
  res.status(200).json({ message: "Get tasks" });
};
// @desc Add Task
// @route /api/tasks
// @access Private
const setTask = (req, res) => {
  res.status(200).json({ message: "Set tasks" });
};
// @desc Update Task
// @route /api/tasks/:id
// @access Private
const updateTask = (req, res) => {
  res.status(200).json({ message: `Update task ${req.params.id}` });
};
// @desc Delete Task
// @route /api/tasks/:id
// @access Private
const deleteTask = (req, res) => {
  res.status(200).json({ message: `Delete tasks ${req.params.id}` });
};

module.exports = { getTasks, setTask, updateTask, deleteTask };
