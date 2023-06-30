const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add task title"],
    },
    type: {
      type: String,
      enum: ["monthly", "weekly", "daily"],
      required: [true, "Please add the lifespan of task"],
    },
    // dueDate: {
    //   type: Date,
    //   required: true,
    // },
    completed: {
      type: Boolean,
      default: false,
      required: [true, "Please add the boolean flag"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
