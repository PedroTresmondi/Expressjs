const mongoose = require('mongoose');

//mongoose.connect(
  //'mongodb+srv://root:root@petshop.yxrfa3p.mongodb.net/petshopDB?'
//  'mongodb://root:example@localhost:27017/petshopDB?authSource=admin'
//);

mongoose.connect(
  `mongodb://root:example@localhost:27017/petshopDB?authSource=admin`,
  {
    useNewUrlParser: true,
  }
)


const db = mongoose.connection;

module.exports = db;

