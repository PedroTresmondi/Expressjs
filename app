var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users');

var app = express();
var db = require("./config/dbConnection.js");


var animais = require("./models/Animal.js");
const routes = require('./routes/index.js');

db.on("error", console.log.bind(console, 'Erro ao conectar mongoose'))
db.once("open", () => {
  console.log('Conexao com banco feita com sucesso');
})
app.use(express.json())

indexRouter(app);



app.post('/animais', (req, res) => {
  animais.push(req.body);
  res.status(201).send('Animal cadastrado!')
})

app.put('/animais/:id', (req, res) => {
  let index = procuraAnimal(req.params.id);
  animais[index].nome = req.body.nome;
  res.json(animais);
})

app.delete('/animais/:id', (req, res) => {
  let { id } = req.params;
  let index = procuraAnimal(id);
  animais.splice(index, 1);
  res.send(`Animal ${id} removido`);
})


function procuraAnimal(id) {
  return animais.findIndex(animal => animal.id == id)
}



app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static', express.static('public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
