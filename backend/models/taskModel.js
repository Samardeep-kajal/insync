const mongoose = require("mongoose");
const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add task title"],
    },
    type: {
      type: String,
      enum: ["monthly", "weekly", "daily"],
      required: [true, "Please add the type"],
    },
    // dueDate: {
    //   type: Date,
    //   required: true,
    // },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
