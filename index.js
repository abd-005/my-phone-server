const express = require("express");
const phones = require('./phones.json');
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("My phone information is coming soon!");
});

app.get('/phones', (req,res)=>{
    res.send(phones)
})

app.get('/phone/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    console.log(`I need data for: ${id}`)
    const phone = phones.find(phone=>phone.id===id)||{};
    res.send(phone);
    
})

app.listen(port, () => {
  console.log(`This app is listening to prot: ${port}`);
});
