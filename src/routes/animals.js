const express = require('express');
const AnimalController = require('../controllers/animalsController');

const router = express.Router();

const animalController = new AnimalController();

router
  .get('/', AnimalController.list)
  .get('/:id', AnimalController.listById)
  .post('/', AnimalController.register)
  .put('/:id', AnimalController.updateById)
  .delete('/:id', AnimalController.delete);

module.exports = router;
