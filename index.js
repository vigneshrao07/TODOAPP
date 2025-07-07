const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
});
app.get("/todo", (req, res) => {});
app.put("/completed", (req, res) => {
  const updatepayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatepayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs",
    });
    return;
  }
});
app.listen(3000);
