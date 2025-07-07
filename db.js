const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vignesh45:Rohitsharma%401@cluster0.levgxkf.mongodb.net/todos"
);
const todoschema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoschema);

module.exports = {
  todo,
};
