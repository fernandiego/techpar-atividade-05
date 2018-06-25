// index.js
const express = require("express")
const app = express()
const knex = require("./knexconfig").knex



app.get("/hello", (req, res) => {
  console.log("hello, dear developer")
  res.send("Hello, world!")
})

app.get("/save", (req, res) => {
  knex("pessoa").insert(req.query, "idpessoa").then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.get("/list", (req, res) => {
  knex("pessoa").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

app.listen(3000)
console.log("Let's go!")
