var express = require('express');
// const app = require('../app');
// var router = express.Router();
var animais = require('./animaisRoutes.js');


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Petshop');
  })
  
  app.use(
    express.json(),
    animais
  )

}

module.exports = routes;









