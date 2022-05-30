var express = require("express");
var app = express();
var {autor} = require("./models");
var {livro} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
// Autores
app.get("/autors", async function(req, res){
  var resultado = await autor.findAll();
  res.json(resultado);
});

app.get("/autors/:id/livros", async function(req, res){
  const id = await autor.findByPk(req.params.id, {include: 'livros'});
  res.json(id.livros);
});

app.post("/autors", async function(req, res) {
  var resultado = await autor.create(req.body);
  res.json(resultado);
});

app.put("/autors/:id", async function(req, res) {
  const id = await autor.findByPk(req.params.id);
  const resultadoSave = await id.update(req.body);
  res.json(resultadoSave);
});

app.delete("/autors/:id", async function(req, res) {
 var resultado = autor.destroy({ where: { id: req.params.id }});
  console.log(resultado);
  res.json(resultado)
});

app.get("/autors/:id", async function(req, res) {
 const id = await autor.findByPk(req.params.id);
 res.json(id)
});

// Livros
app.get("/livros", async function(req, res){
  var resultado = await livro.findAll();
  res.json(resultado);
});

app.post("/livros", async function(req, res) {
  var resultado = await livro.create(req.body);
  res.json(resultado);
});

app.put("/livros/:id", async function(req, res) {
  const id = await livro.findByPk(req.params.id);
  const resultadoSave = await id.update(req.body);
  res.json(resultadoSave);
});

app.delete("/livros/:id", async function(req, res) {
 var resultado = livro.destroy({ where: { id: req.params.id }});
  console.log(resultado);
  res.json(resultado)
});

app.get("/livros/:id", async function(req, res) {
 const id = await livro.findByPk(req.params.id);
 res.json(id)
});

app.get("/livros/:id/autors", async function(req, res){
  const id = await livro.findByPk(req.params.id, {include: 'autor'});
  res.json(id.autor);
});

app.listen(3000, function(){
  console.log("o servidor está no pique da viola")
});

//url temos 3 formas
// https://Projeto-PTAS2.guilhermetombin.repl.co/inserir?id=123 req.query.id
//https://Projeto-PTAS2.guilhermetombin.repl.co/inserir/123 req.params.id
// https://Projeto-PTAS2.guilhermetombin.repl.co/inserir req.body.id