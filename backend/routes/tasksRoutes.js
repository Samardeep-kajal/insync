const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

// Different endpoints for different tasks lifecycle
// Tasks Lifecycle - monthly, weekly and daily.
// Will measure overall productivity of user by assessing these tasks.
//Task model will contain a key related to lifecycle to sort the tasks.

/* Tasks route endpoints */
router.route("/").get(getTasks).post(setTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
