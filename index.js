const cfg = require("./knexfile")
let env = process.env.NODE_ENV || "development" // failsafe
const knex = require("knex")(cfg[env])
exports.knex = knex
exports.env = env
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()
<<<<<<< HEAD
app.use(express.static("public"))

app.use(morgan("dev"))

app.use(bodyParser.urlencoded())

=======
>>>>>>> parent of ae8e4aa... Atividade 02, go go

app.get("/hello", (req, res) => {
  console.log("hello, dear developer")
  res.send("Hello, world!")
})

<<<<<<< HEAD
app.post("/save", (req, res) => {
  const pessoa = req.body
  console.log(pessoa)
  knex("pessoa").insert(pessoa, "idpessoa").then(ret => {
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

knex.migrate.latest().then(_ =>
  app.listen(3000, _ =>
console.log("Let's go!")))
=======
app.listen(3000)
console.log("Let's go!")
>>>>>>> parent of ae8e4aa... Atividade 02, go go
