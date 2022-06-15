const express = require('express');
const createError = require('http-errors');
const animalsRouter = require('./routes/animals');

const app = express();
const db = require('./config/dbConnection');

db.on('error', console.log.bind(console, 'Erro ao conectar ao banco'));
db.once('open', () => {
  console.log('Conexao com banco feita com sucesso');
});
app.use(express.json());

app.use('/animals', animalsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
