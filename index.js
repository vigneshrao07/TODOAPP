const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const { title } = require("process");
const cors=require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});
app.get("/todo", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});
app.put("/completed", async (req, res) => {
  const updatepayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatepayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs please send the right inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed"
  })
});
app.listen(3000);
