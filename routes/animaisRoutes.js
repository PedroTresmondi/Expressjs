var express = require('express');
const AnimalController = require('../controllers/animaisController.js');

const router = express.Router();

router
    .get("/animais", AnimalController.listarAnimais)
    .post("/animais", AnimalController.cadastrarAnimal)

module.exports = router;