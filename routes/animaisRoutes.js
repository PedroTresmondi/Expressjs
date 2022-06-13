var express = require('express');
const AnimalController = require('../controllers/animaisController.js');

const router = express.Router();

router
    .get("/animais", AnimalController.listarAnimais)
    .get("/animais/:id", AnimalController.listarAnimalPorId)
    .post("/animais", AnimalController.cadastrarAnimal)
    .put("/animais/:id", AnimalController.atualizarCadastroAnimal)
    .delete("/animais/:id", AnimalController.excluirAnimal)

module.exports = router;