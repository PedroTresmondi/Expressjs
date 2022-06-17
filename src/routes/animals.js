const express = require('express');
const AnimalController = require('../controllers/animalsController');

const router = express.Router();

const animalController = new AnimalController();

router
  .get('/animais', AnimalController.list)
  .get('/animais/:id', AnimalController.listById)
  .post('/animais', AnimalController.register)
  .put('/animais/:id', AnimalController.updateById)
  .delete('/animais/:id', AnimalController.delete);

module.exports = router;
