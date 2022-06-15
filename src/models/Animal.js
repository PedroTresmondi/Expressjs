const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  id: { type: Number },
  nome: { type: String, required: true },
  raca: { type: String, required: true },
  idade: { type: Number, required: true },
  tipo: { type: String, required: true }
});

const animalModel = mongoose.model('animais', animalSchema);

module.exports = animalModel;
