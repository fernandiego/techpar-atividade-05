// index.js
const express = require("express")
const app = express()

app.get("/hello", (req, res) => {
  console.log("hello, dear developer")
  res.send("Hello, world!")
})

app.listen(3000)
console.log("Let's go!")
