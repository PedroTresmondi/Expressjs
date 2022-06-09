var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



const animais = [
  {id: 1, "nome": "Rupert", "raca": "Golden Retriever"},
  {id: 2, "nome": "Pierre", "raca": "Yorkshire"},
  {id: 3, "nome": "Max", "raca": "Pug"},

 
]
var app = express();
app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).send('Testando');
}) 


app.get('/animais', (req, res) => {
  res.status(200).json(animais)
})


app.get('/ola/:nome/:cargo', function (req, res) {
  res.send("<h1> " + req.params.nome +"</h1>" + 
  "<h2> cargo:  "+ req.params.cargo +"</h2>");

})

app.post('/animais', (req, res) => {
  animais.push(req.body);
  res.status(201).send('Animal cadastrado!')
  

})

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
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
