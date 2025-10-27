const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("My phone information is coming soon!");
});

app.listen(port, () => {
  console.log(`This app is listening to prot: ${port}`);
});
