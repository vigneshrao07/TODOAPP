const express=require("express")
const app=express();

app.use(express.json());

app.post("/todo", (req, res)=>{
    res.send("hello world");
});
app.get("/todo", (req, res)=>{

})
app.put("/completed",(req,res)=>{

})
app.listen(3000);