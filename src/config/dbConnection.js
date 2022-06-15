const mongoose = require('mongoose');

mongoose.connect(
  //'mongodb+srv://root:root@petshop.yxrfa3p.mongodb.net/petshopDB?'
  'mongodb://root:example@mongo:27017/',
);

const db = mongoose.connection;

module.exports = db;
